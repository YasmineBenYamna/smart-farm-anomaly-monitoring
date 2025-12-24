"""
ML Module - ViewSets (IMPROVED - Always Load from Disk)
API endpoints for anomaly detection using ViewSets.
All endpoints allow unauthenticated access (AllowAny).
Models are ALWAYS loaded from disk for maximum reliability.

KEY IMPROVEMENT:
- Removed in-memory cache (_detector_cache)
- Always load models from disk to ensure persistence across server restarts
- This is slightly slower but 100% reliable
"""

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

from .serializers import (
    TrainModelSerializer,
    TrainModelResponseSerializer,
    DetectAnomaliesSerializer,
    DetectAnomaliesResponseSerializer,
    BatchDetectSerializer,
    BatchDetectResponseSerializer,
    ModelStatusSerializer
)
from .anomaly_detector import IsolationForestDetector
from .preprocessing import get_recent_readings
from crop_app.models import SensorReading, AnomalyEvent, FieldPlot
from datetime import datetime
import numpy as np
import os


# ============================================================================
# MODEL MANAGEMENT - ALWAYS LOAD FROM DISK
# ============================================================================

# Directory to store trained models
MODEL_DIR = os.path.join(settings.BASE_DIR, 'trained_models')

# Create directory if it doesn't exist
if not os.path.exists(MODEL_DIR):
    os.makedirs(MODEL_DIR)


def get_model_path(sensor_type: str) -> str:
    """Get file path for a sensor type's model."""
    return os.path.join(MODEL_DIR, f'{sensor_type}_model.pkl')


def load_detector_from_disk(sensor_type: str) -> IsolationForestDetector:
    """
    ALWAYS load detector from disk (no caching).
    
    This ensures the model persists across server restarts.
    If no model exists, creates a new untrained detector.
    
    Args:
        sensor_type: Sensor type (moisture, temperature, humidity)
    
    Returns:
        IsolationForestDetector instance
    """
    model_path = get_model_path(sensor_type)
    
    # Try to load from disk
    if os.path.exists(model_path):
        try:
            detector = IsolationForestDetector()
            detector.load_model(model_path)
            print(f"✅ Loaded {sensor_type} model from {model_path}")
            return detector
        except Exception as e:
            print(f"⚠️ Failed to load {sensor_type} model: {e}")
            print(f"   Creating new untrained detector")
    
    # Create new detector if file doesn't exist or loading failed
    print(f"📝 Creating new {sensor_type} detector (not trained yet)")
    detector = IsolationForestDetector(contamination=0.1)
    return detector


def save_detector_to_disk(detector: IsolationForestDetector, sensor_type: str) -> bool:
    """
    Save detector to disk.
    
    Args:
        detector: Trained detector instance
        sensor_type: Sensor type
    
    Returns:
        True if saved successfully, False otherwise
    """
    try:
        model_path = get_model_path(sensor_type)
        detector.save_model(model_path)
        print(f"💾 Saved {sensor_type} model to {model_path}")
        return True
    except Exception as e:
        print(f"❌ Failed to save {sensor_type} model: {e}")
        return False


# ============================================================================
# VIEWSET
# ============================================================================

class MLViewSet(viewsets.ViewSet):
    """
    ViewSet for ML anomaly detection operations.
    
    Provides endpoints for:
    - train: Train anomaly detection models
    - detect: Detect anomalies for a single plot/sensor
    - batch_detect: Detect anomalies across multiple plots/sensors
    - status: Get status of trained models
    """
    
    permission_classes = [AllowAny]
    
    
    @action(detail=False, methods=['post'], url_path='train')
    def train(self, request):
        """
        Train the anomaly detection model on normal data.
        
        POST /api/ml/train/
        Body:
        {
            "sensor_type": "moisture",
            "use_recent_data": true,
            "data_points": 100
        }
        """
        # Validate input
        serializer = TrainModelSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        sensor_type = serializer.validated_data['sensor_type']
        
        try:
            # ALWAYS load from disk (no cache)
            detector = load_detector_from_disk(sensor_type)
            
            # Option 1: Use recent database data
            if serializer.validated_data.get('use_recent_data'):
                data_points = serializer.validated_data.get('data_points', 100)
              # GLOBAL TRAINING (always use ALL plots)
                print(f"🌍 Training GLOBAL model for {sensor_type} (all plots)")
                from .preprocessing import get_recent_readings_all_plots
                values = get_recent_readings_all_plots(sensor_type, count=data_points)
                training_scope = "global (all plots)" #future enhancement    
               
                if len(values) < 10:
                    return Response(
                        {
                            'error': f'Not enough data. Need 10+, have {len(values)}',
                            'training_scope': training_scope
                        },
                        status=status.HTTP_400_BAD_REQUEST
                    )
                            
                # Preprocess
                from .preprocessing import SensorDataPreprocessor
                preprocessor = SensorDataPreprocessor(window_size=10)
                training_data = preprocessor.prepare_for_model(values, use_features=True)
                
            # Option 2: Use provided training data
            elif serializer.validated_data.get('training_data'):
                training_data = np.array(serializer.validated_data['training_data'])
            
            else:
                return Response(
                    {'error': 'Either use_recent_data or training_data required'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Train the model
            stats = detector.train(training_data)
            
            # ALWAYS save to disk after training
            if not save_detector_to_disk(detector, sensor_type):
                return Response(
                    {'error': 'Model trained but failed to save to disk'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            
            # Format response
            response_data = {
                'success': True,
                'message': f'Model trained and saved for {sensor_type}',
                'training_scope': training_scope if serializer.validated_data.get('use_recent_data') else 'custom data',
                'stats': stats,
                'model_path': get_model_path(sensor_type)
            }
            
            return Response(response_data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    
    @action(detail=False, methods=['post'], url_path='detect')
    def detect(self, request):
        """
        Detect anomalies in sensor data.
        
        POST /api/ml/detect/
        Body:
        {
            "plot_id": 1,
            "sensor_type": "moisture"
        }
        """
        # Validate input
        serializer = DetectAnomaliesSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        plot_id = serializer.validated_data['plot_id']
        sensor_type = serializer.validated_data['sensor_type']
        
        try:
            # ALWAYS load from disk (no cache)
            detector = load_detector_from_disk(sensor_type)
            
            if not detector.is_trained:
                return Response(
                    {
                        'error': f'Model not trained for {sensor_type}',
                        'hint': 'Train the model first using POST /api/ml/train/',
                        'model_path': get_model_path(sensor_type),
                        'model_exists': os.path.exists(get_model_path(sensor_type))
                    },
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Get the FieldPlot object
            try:
                plot = FieldPlot.objects.get(id=plot_id)
            except FieldPlot.DoesNotExist:
                return Response(
                    {'error': f'Plot {plot_id} does not exist'},
                    status=status.HTTP_404_NOT_FOUND
                )
            
            # Get readings WITH objects (for ForeignKey)
            readings_qs = SensorReading.objects.filter(
                plot=plot,
                sensor_type=sensor_type
            ).order_by('-timestamp')[:50]
            
            readings_list = list(readings_qs)
            values = [r.value for r in readings_list]
            
            if len(values) < 10:
                return Response(
                    {'error': f'Not enough data. Need 10+, have {len(values)}'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Preprocess data
            from .preprocessing import SensorDataPreprocessor
            preprocessor = SensorDataPreprocessor(window_size=10)
            processed_data = preprocessor.prepare_for_model(values, use_features=True)
            
            # Detect anomalies
            results = detector.detect_with_confidence(processed_data)
            
            # Filter to show only anomalies
            anomalies = [r for r in results if r['is_anomaly']]
            
            # Create AnomalyEvent records with proper ForeignKeys
            created_events = []
            for i, anomaly in enumerate(anomalies):
                # Get the sensor reading that corresponds to this window
                window_index = anomaly.get('index', i)
                
                # Get the most recent reading in this window
                if window_index < len(readings_list):
                    sensor_reading = readings_list[window_index]
                else:
                    sensor_reading = readings_list[0]  # Fallback to most recent
                
                # Map severity to model choices
                severity_map = {
                    'NORMAL': 'low',
                    'MINOR': 'low',
                    'WARNING': 'medium',
                    'CRITICAL': 'high'
                }
                severity = severity_map.get(anomaly['severity'], 'medium')
                
                # Create event with ForeignKey objects
                event = AnomalyEvent.objects.create(
                    plot=plot,
                    sensor_reading=sensor_reading,
                    anomaly_type=f'{sensor_type}_anomaly',
                    severity=severity,
                    model_confidence=anomaly['confidence']
                )
                created_events.append(event.id)
            
            response_data = {
                'success': True,
                'plot_id': plot_id,
                'sensor_type': sensor_type,
                'total_windows': len(results),
                'anomalies_detected': len(anomalies),
                'anomaly_events_created': created_events,
                'results': results
            }
            
            return Response(response_data, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    
    @action(detail=False, methods=['post'], url_path='batch-detect')
    def batch_detect(self, request):
        """
        Run anomaly detection on all plots and sensors.
        
        POST /api/ml/batch-detect/
        Body:
        {
            "plot_ids": [1, 2, 3],
            "sensor_types": ["moisture", "temperature"]
        }
        """
        # Validate input
        serializer = BatchDetectSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        plot_ids = serializer.validated_data.get('plot_ids')
        sensor_types = serializer.validated_data.get('sensor_types', ['moisture', 'temperature', 'humidity'])
        
        # Get all plot IDs if not specified
        if not plot_ids:
            plot_ids = list(FieldPlot.objects.values_list('id', flat=True))
        
        results = []
        
        for plot_id in plot_ids:
            # Get the FieldPlot object
            try:
                plot = FieldPlot.objects.get(id=plot_id)
            except FieldPlot.DoesNotExist:
                results.append({
                    'plot_id': plot_id,
                    'sensor_type': 'all',
                    'status': 'error',
                    'error': f'Plot {plot_id} does not exist'
                })
                continue
            
            for sensor_type in sensor_types:
                try:
                    # ALWAYS load from disk (no cache)
                    detector = load_detector_from_disk(sensor_type)
                    
                    if not detector.is_trained:
                        results.append({
                            'plot_id': plot_id,
                            'sensor_type': sensor_type,
                            'status': 'skipped',
                            'reason': 'model not trained'
                        })
                        continue
                    
                    # Get and process data WITH objects
                    readings_qs = SensorReading.objects.filter(
                        plot=plot,
                        sensor_type=sensor_type
                    ).order_by('-timestamp')[:50]
                    
                    readings_list = list(readings_qs)
                    values = [r.value for r in readings_list]
                    
                    if len(values) < 10:
                        results.append({
                            'plot_id': plot_id,
                            'sensor_type': sensor_type,
                            'status': 'skipped',
                            'reason': 'insufficient data'
                        })
                        continue
                    
                    # Preprocess and detect
                    from .preprocessing import SensorDataPreprocessor
                    preprocessor = SensorDataPreprocessor(window_size=10)
                    processed_data = preprocessor.prepare_for_model(values, use_features=True)
                    
                    detections = detector.detect_with_confidence(processed_data)
                    anomalies = [d for d in detections if d['is_anomaly']]
                    
                    # Create events with proper ForeignKeys
                    for i, anomaly in enumerate(anomalies):
                        # Get corresponding sensor reading
                        window_index = anomaly.get('index', i)
                        if window_index < len(readings_list):
                            sensor_reading = readings_list[window_index]
                        else:
                            sensor_reading = readings_list[0]
                        
                        # Map severity
                        severity_map = {
                            'NORMAL': 'low',
                            'MINOR': 'low',
                            'WARNING': 'medium',
                            'CRITICAL': 'high'
                        }
                        severity = severity_map.get(anomaly['severity'], 'medium')
                        
                        # Create with ForeignKey objects
                        AnomalyEvent.objects.create(
                            plot=plot,
                            sensor_reading=sensor_reading,
                            anomaly_type=f'{sensor_type}_anomaly',
                            severity=severity,
                            model_confidence=anomaly['confidence']
                        )
                    
                    results.append({
                        'plot_id': plot_id,
                        'sensor_type': sensor_type,
                        'status': 'success',
                        'anomalies_detected': len(anomalies)
                    })
                
                except Exception as e:
                    results.append({
                        'plot_id': plot_id,
                        'sensor_type': sensor_type,
                        'status': 'error',
                        'error': str(e)
                    })
        
        response_data = {
            'success': True,
            'results': results,
            'total_processed': len(results),
            'total_anomalies': sum(r.get('anomalies_detected', 0) for r in results)
        }
        
        return Response(response_data, status=status.HTTP_200_OK)
    
    
    @action(detail=False, methods=['get'], url_path='status')
    def get_status(self, request):
        """
        Get status of trained models.
        
        GET /api/ml/status/
        """
        status_info = {}
        
        for sensor_type in ['moisture', 'temperature', 'humidity']:
            # ALWAYS load from disk to get accurate status
            detector = load_detector_from_disk(sensor_type)
            model_path = get_model_path(sensor_type)
            model_exists_on_disk = os.path.exists(model_path)
            
            status_info[sensor_type] = {
                'trained': detector.is_trained,
                'training_data_size': detector.training_data_size,
                'training_date': detector.training_date.isoformat() if detector.training_date else None,
                'saved_to_disk': model_exists_on_disk,
                'model_path': model_path if model_exists_on_disk else None
            }
        
        return Response(status_info, status=status.HTTP_200_OK)
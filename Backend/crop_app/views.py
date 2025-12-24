# crop_app/views.py
#définit qui peut voir/créer
# quoi via l’API, en fonction du rôle
from rest_framework import generics ,viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import SensorReading, AnomalyEvent, AgentRecommendation,FarmProfile, FieldPlot
from .serializers import (
    SensorReadingSerializer, AnomalyEventSerializer, AgentRecommendationSerializer ,FarmProfileSerializer, FieldPlotSerializer
)



# CRUD complet sur les fermes via l’API 
class FarmProfileViewSet(viewsets.ModelViewSet):
    serializer_class = FarmProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        
        # Admins see all farms
        if user.is_staff or user.is_superuser:
            return FarmProfile.objects.all()
        
        # Farmers see only their own farms
        return FarmProfile.objects.filter(owner=user)
    
# GET /api/field-plots/ all plots for admin, own farm plots for user
class FieldPlotViewSet(viewsets.ModelViewSet):
    serializer_class = FieldPlotSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        queryset = FieldPlot.objects.all()
        
        # Filter by farm_id if provided (for admin navigating farms)
        farm_id = self.request.query_params.get('farm')
        if farm_id:
            queryset = queryset.filter(farm_id=farm_id)
        
        # Farmers can only see their own plots
        if not (user.is_staff or user.is_superuser):
            queryset = queryset.filter(farm__owner=user)
            
        return queryset                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             



# POST /api/sensor-readings/ + GET with ?plot=
class SensorReadingListCreate(generics.ListCreateAPIView):
    queryset = SensorReading.objects.all().order_by('-timestamp')
    serializer_class = SensorReadingSerializer
     
    def get_permissions(self):
        """
        POST (simulator ingestion) = AllowAny
        GET (dashboard viewing) = IsAuthenticated
        """
        if self.request.method == 'POST':
            return [AllowAny()]  # Simulator can POST without auth
        return [IsAuthenticated()]  # Dashboard needs JWT to GET

    def get_queryset(self):
        queryset = super().get_queryset() 
       # Only filter by user for authenticated requests (GET)
        if self.request.user.is_authenticated and not self.request.user.is_staff:
            queryset = queryset.filter(plot__farm__owner=self.request.user)
            
        plot_id = self.request.query_params.get('plot') 
        if plot_id:
            queryset = queryset.filter(plot_id=plot_id)
        return queryset


# GET /api/anomalies/
class AnomalyList(generics.ListAPIView):
    queryset = AnomalyEvent.objects.all().order_by('-timestamp')
    serializer_class = AnomalyEventSerializer
    permission_classes = [IsAuthenticated] # Require authentication for viewing data

    def get_queryset(self):# Restrict to user's farm plots
        queryset = super().get_queryset()
        #filter by user ownership
        if not self.request.user.is_staff:
            queryset = queryset.filter(plot__farm__owner=self.request.user)
        #plot filtering 
        plot_id = self.request.query_params.get('plot')
        if plot_id:
            queryset = queryset.filter(plot_id=plot_id)

        return queryset
        
# GET /api/recommendations/
class RecommendationList(generics.ListAPIView):
    queryset = AgentRecommendation.objects.all().order_by('-timestamp')
    serializer_class = AgentRecommendationSerializer
    permission_classes = [IsAuthenticated]  # Require authentication for viewing data

    def get_queryset(self): 
        queryset = super().get_queryset()

         # filter by user ownership
        if not self.request.user.is_staff:
            queryset = queryset.filter(plot_event__plot__farm__owner=self.request.user)

        # plot filtering
        plot_id = self.request.query_params.get('plot')
        if plot_id:
            queryset = queryset.filter(anomaly_event__plot_id=plot_id)
        return queryset
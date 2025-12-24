import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

export interface SensorReading {
  id?: number;
  timestamp: string;
  sensor_type: string;
  value: number;
  source: string;
  plot: number;
}

export interface AnomalyEvent {
  id: number;
  timestamp: string;
  anomaly_type: string;
  severity: 'low' | 'medium' | 'high';
  model_confidence: number;
  plot: number;
  sensor_reading: {
    id: number;
    value: number;
    sensor_type: string;
    timestamp: string;
  } | null;
}

export interface AnomalyEvent {
  id: number;
  timestamp: string;
  anomaly_type: string;
  severity: 'low' | 'medium' | 'high';
  model_confidence: number;
  plot: number;
  sensor_reading: {
    id: number;
    value: number;
    sensor_type: string;
    timestamp: string;
  } | null;
  recommendation?: {  // ✅ ADD THIS
    recommended_action: string;
    explanation_text: string;
    confidence: number;
  };
}


@Injectable({ providedIn: 'root' })
export class ReadingsService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getDecodedToken(): any | null {
    const token = localStorage.getItem('access_token');
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }

  getReadingsByPlot(plotId: number): Observable<SensorReading[]> {
    return this.http
      .get<{ results: SensorReading[] }>(`${this.apiUrl}/sensor-readings/?plot=${plotId}`)
      .pipe(map(response => response.results));
  }

  // ✅ FIX: Handle paginated response
  getAnomaliesByPlot(plotId: number): Observable<AnomalyEvent[]> {
    return this.http
      .get<{ results: AnomalyEvent[] } | AnomalyEvent[]>(`${this.apiUrl}/anomalies/?plot=${plotId}`)
      .pipe(
        map(response => {
          // Check if response is paginated (has 'results' property)
          if (response && 'results' in response) {
            return response.results;
          }
          // Otherwise it's already an array
          return response as AnomalyEvent[];
        })
      );
  }
}
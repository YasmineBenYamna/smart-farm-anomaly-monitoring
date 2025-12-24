import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReadingsService, SensorReading, AnomalyEvent } from '../../../../services/readings.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  imports: [Ng2GoogleChartsModule, CommonModule],
  standalone: true
})
export class LineChartComponent implements OnInit, OnDestroy {
  // Chart data
  public chart: any;
  public allReadings: SensorReading[] = [];
  public isLoadingChart: boolean = false;  // ✅ ADD THIS LINE!

  
  // Anomaly data
  public anomalies: AnomalyEvent[] = [];
  public isLoadingAnomalies: boolean = false;
  
  // Common
  private refreshSubscription?: Subscription;
  private plotId: number = 0;

  constructor(
    private readingsService: ReadingsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.plotId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Load initial data
    this.loadReadings();
    this.loadAnomalies();

    // Auto-refresh every 30 seconds
    this.refreshSubscription = interval(30000).subscribe(() => {
      this.loadReadings();
      this.loadAnomalies();
    });
  }

  ngOnDestroy(): void {
    this.refreshSubscription?.unsubscribe();
  }

  // ========== SENSOR READINGS ==========
  loadReadings(): void {
    this.readingsService.getReadingsByPlot(this.plotId).subscribe({
      next: (newReadings: SensorReading[]) => {
        console.log('New readings received:', newReadings.length);

        // Merge new readings with existing ones
        newReadings.forEach(reading => {
          const exists = this.allReadings.some(r => r.id === reading.id);
          if (!exists) {
            this.allReadings.push(reading);
          }
        });

        // Sort by timestamp (oldest first)
        this.allReadings.sort((a, b) => 
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );

        // Keep only last 100 readings per sensor type
        const maxReadingsPerSensor = 100;
        this.allReadings = this.limitReadings(this.allReadings, maxReadingsPerSensor);

        console.log('Total accumulated readings:', this.allReadings.length);

        // Update chart
        this.updateChart();
      },
      error: (err) => {
        console.error('Failed to load readings', err);
      }
    });
  }

  limitReadings(readings: SensorReading[], maxPerSensor: number): SensorReading[] {
    const moisture = readings.filter(r => r.sensor_type === 'moisture').slice(-maxPerSensor);
    const humidity = readings.filter(r => r.sensor_type === 'humidity').slice(-maxPerSensor);
    const temperature = readings.filter(r => r.sensor_type === 'temperature').slice(-maxPerSensor);
    
    return [...moisture, ...humidity, ...temperature].sort((a, b) => 
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }
updateChart(): void {
  // Group readings by rounded minute
  const groupedByMinute: { [key: string]: {
    timestamp: Date,
    moisture: number | null,
    humidity: number | null,
    temperature: number | null
  }} = {};

  this.allReadings.forEach(reading => {
    const date = new Date(reading.timestamp);
    date.setSeconds(0, 0);
    const minuteKey = date.toISOString();

    if (!groupedByMinute[minuteKey]) {
      groupedByMinute[minuteKey] = {
        timestamp: date,
        moisture: null,
        humidity: null,
        temperature: null
      };
    }

    const numericValue = Number(reading.value);

    if (reading.sensor_type === 'moisture') {
      groupedByMinute[minuteKey].moisture = numericValue;
    } else if (reading.sensor_type === 'humidity') {
      groupedByMinute[minuteKey].humidity = numericValue;
    } else if (reading.sensor_type === 'temperature') {
      groupedByMinute[minuteKey].temperature = numericValue;
    }
  });

  // Convert to sorted array
  const sortedData = Object.values(groupedByMinute)
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  console.log('Total data points:', sortedData.length);

  // ✅ Generate ALL ticks manually (one for each data point)
  const allTicks = sortedData.map(group => ({
    v: group.timestamp,  // Value (Date object)
    f: group.timestamp.toLocaleTimeString('en-US', {   // Formatted label
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }));

  // Build dataTable with Date objects
  const dataTable: any[][] = [
    ['Time', 'Moisture (%)', 'Humidity (%)', 'Temperature (°C)']
  ];

  sortedData.forEach(group => {
    dataTable.push([
      group.timestamp,  // Date object
      group.moisture,
      group.humidity,
      group.temperature
    ]);
  });

  // ✅ Calculate width based on number of data points
  const chartWidth = Math.max(1000, sortedData.length * 80);  // 80px per data point

  // Update chart
  this.chart = {
    chartType: 'LineChart',
    dataTable: dataTable,
    options: {
      title: 'Sensor Readings Over Time',
      curveType: 'function',
      legend: { position: 'bottom' },
      height: 500,
      width: chartWidth,  // ✅ Dynamic width
      colors: ['#1E88E5', '#43A047', '#E53935'],
      backgroundColor: 'transparent',
      hAxis: {
        title: 'Time',
        ticks: allTicks,  // ✅ FORCE all ticks to show!
        slantedText: true,
        slantedTextAngle: 45,
        textStyle: { 
          fontSize: 11,
          color: '#666'
        },
        gridlines: { 
          count: -1,  // Auto
          color: '#e0e0e0'
        },
        minorGridlines: { 
          count: 0 
        }
      },
      vAxis: {
        title: 'Value',
        minValue: 0,
        maxValue: 100,
        gridlines: { count: 11 },
        format: '#'
      },
      lineWidth: 3,
      pointSize: 6,
      interpolateNulls: false
    }
  };
}
  // ========== ANOMALIES ==========
loadAnomalies(): void {
  this.isLoadingAnomalies = true;
  this.readingsService.getAnomaliesByPlot(this.plotId).subscribe({
    next: (data) => {
      this.anomalies = data;
      this.isLoadingAnomalies = false;
      console.log('Anomalies loaded:', data);
    },
    error: (err) => {
      console.error('Failed to load anomalies', err);
      this.isLoadingAnomalies = false;
    }
  });
}

// Helper method to get severity badge class
getSeverityClass(severity: string): string {
  switch (severity.toLowerCase()) {
    case 'high': return 'badge-danger';
    case 'medium': return 'badge-warning';
    case 'low': return 'badge-info';
    default: return 'badge-secondary';
  }
}

// Helper method to format confidence percentage
formatConfidence(confidence: number): string {
  return `${(confidence * 100).toFixed(1)}%`;
}

// ✅ ADD THIS: Clean anomaly type name
getCleanAnomalyType(anomalyType: string): string {
  // Remove "_anomaly" suffix and capitalize
  return anomalyType
    .replace(/_anomaly$/i, '')  // Remove _anomaly at end
    .replace(/_/g, ' ')         // Replace underscores with spaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize
    .join(' ');
}
}
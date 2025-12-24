import { Component, OnInit } from '@angular/core';
//import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';
import { ReadingsService,SensorReading } from '../../../../services/readings.service';
import { ActivatedRoute } from '@angular/router';
import 'chartist-plugin-tooltips';
@Component({
    selector: 'app-chart10',
    templateUrl: './chart10.component.html',
    styleUrls: ['./chart10.component.scss'],
    imports: [ChartistModule]
})
export class Chart10Component implements OnInit {
public chart10: any = { type: 'Line', data: { labels: [], series: [] }, options: {} };
  constructor(private readingsService: ReadingsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  const plotId = Number(this.route.snapshot.paramMap.get('id'));

  this.readingsService.getReadingsByPlot(plotId).subscribe({
    next: (data: SensorReading[]) => {
      const labels = data.map(r => new Date(r.timestamp).toLocaleTimeString());
      const moisture = data.filter(r => r.sensor_type === 'moisture').map(r => r.value);
      const humidity = data.filter(r => r.sensor_type === 'humidity').map(r => r.value);
      const temperature = data.filter(r => r.sensor_type === 'temperature').map(r => r.value);

      this.chart10 = {
        type: 'Line',
        data: {
          labels,
          series: [
            { name: 'Moisture', data: moisture },
            { name: 'Humidity', data: humidity },
            { name: 'Temperature', data: temperature }
          ]
        },
        options: {
  fullWidth: true,
  chartPadding: { right: 40 },
  axisY: {
    low: 15,
    high: 80,
    onlyInteger: true,
    scaleMinSpace: 10, // optional: controls spacing between ticks
    labelInterpolationFnc: function(value: number) {
      return value; // show every tick
    },
    ticks: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80] // ✅ custom tick values
  }
}

      };
    },
    error: (err) => console.error('Failed to load readings', err)
  });
}


}

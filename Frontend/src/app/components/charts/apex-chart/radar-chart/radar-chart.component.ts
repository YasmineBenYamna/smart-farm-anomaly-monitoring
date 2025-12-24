import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radar-chart',
    templateUrl: './radar-chart.component.html',
    styleUrls: ['./radar-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class RadarChartComponent implements OnInit {

  public radarChart  = chartData.radarChart

  constructor() { }

  ngOnInit(): void {
  }

}

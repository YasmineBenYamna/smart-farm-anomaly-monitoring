import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-radial-bar-chart',
    templateUrl: './radial-bar-chart.component.html',
    styleUrls: ['./radial-bar-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class RadialBarChartComponent implements OnInit {

  constructor() { }
  public radialBarChart  = chartData.radialBarChart

  ngOnInit(): void {
  }

}

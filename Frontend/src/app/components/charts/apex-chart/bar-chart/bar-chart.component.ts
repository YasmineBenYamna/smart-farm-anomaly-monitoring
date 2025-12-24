import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class BarChartComponent implements OnInit {
  
  public barChart = chartData.barChart

  constructor() { }

  ngOnInit(): void {
  }

}

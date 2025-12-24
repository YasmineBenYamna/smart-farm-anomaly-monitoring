import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-weekly-chart',
    templateUrl: './weekly-chart.component.html',
    styleUrls: ['./weekly-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class WeeklyChartComponent implements OnInit {

  // chart data
  public weeklyChart = chartData.weeklyChart;

  constructor() { }

  ngOnInit(): void {
  }

}

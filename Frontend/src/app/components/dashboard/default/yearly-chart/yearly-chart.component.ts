import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-yearly-chart',
    templateUrl: './yearly-chart.component.html',
    styleUrls: ['./yearly-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class YearlyChartComponent implements OnInit {

  // chart data
  public yearlyChart = chartData.yearlyChart;

  constructor() { }

  ngOnInit(): void {
  }

}

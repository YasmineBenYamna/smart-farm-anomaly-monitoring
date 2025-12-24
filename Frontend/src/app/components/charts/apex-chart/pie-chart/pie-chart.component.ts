import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class PieChartComponent implements OnInit {

  public pieChart  = chartData.pieChart

  constructor() { }

  ngOnInit(): void {
  }

}

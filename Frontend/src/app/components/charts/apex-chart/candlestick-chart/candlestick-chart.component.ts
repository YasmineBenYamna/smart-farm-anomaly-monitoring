import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-candlestick-chart',
    templateUrl: './candlestick-chart.component.html',
    styleUrls: ['./candlestick-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class CandlestickChartComponent implements OnInit {

  public candlestickChart  = chartData.candlestickChart

  constructor() { }

  ngOnInit(): void {
  }

}

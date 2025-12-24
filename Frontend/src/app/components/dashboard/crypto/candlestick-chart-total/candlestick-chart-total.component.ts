import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-candlestick-chart-total',
    templateUrl: './candlestick-chart-total.component.html',
    styleUrls: ['./candlestick-chart-total.component.scss'],
    imports: [NgApexchartsModule]
})
export class CandlestickChartTotalComponent implements OnInit {
  public candlestick = chartData.candlestick;

  constructor() { }

  ngOnInit(): void {
  }

}

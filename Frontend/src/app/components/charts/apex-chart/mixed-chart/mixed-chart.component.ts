import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-mixed-chart',
    templateUrl: './mixed-chart.component.html',
    styleUrls: ['./mixed-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class MixedChartComponent implements OnInit {

  public mixedChart  = chartData.mixedChart

  constructor() { }

  ngOnInit(): void {
  }

}

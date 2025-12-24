import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-bubble-chart',
    templateUrl: './bubble-chart.component.html',
    styleUrls: ['./bubble-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class BubbleChartComponent implements OnInit {
  
  public bubbleChart = chartData.bubbleChart

  constructor() { }

  ngOnInit(): void {
  }

}

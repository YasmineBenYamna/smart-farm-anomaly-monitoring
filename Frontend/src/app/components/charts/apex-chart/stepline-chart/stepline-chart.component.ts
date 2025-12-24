import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-stepline-chart',
    templateUrl: './stepline-chart.component.html',
    styleUrls: ['./stepline-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class SteplineChartComponent implements OnInit {

  public steplineChart = chartData.steplineChart

  constructor() { }

  ngOnInit(): void {
  }

}

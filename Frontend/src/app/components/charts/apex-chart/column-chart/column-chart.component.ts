import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-column-chart',
    templateUrl: './column-chart.component.html',
    styleUrls: ['./column-chart.component.scss'],
    imports: [NgApexchartsModule]
})
export class ColumnChartComponent implements OnInit {

  
  public columnChart2  = chartData.columnChart2


  constructor() { }

  ngOnInit(): void {
  }

}

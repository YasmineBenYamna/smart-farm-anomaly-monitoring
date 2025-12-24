import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart12',
    templateUrl: './chart12.component.html',
    styleUrls: ['./chart12.component.scss'],
    imports: [ChartistModule]
})
export class Chart12Component implements OnInit {

  public chart12 = chartData.chart12;

  constructor() { }

  ngOnInit(): void {
  }

}

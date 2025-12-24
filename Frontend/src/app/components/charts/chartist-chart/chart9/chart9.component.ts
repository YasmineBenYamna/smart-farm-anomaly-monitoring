import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart9',
    templateUrl: './chart9.component.html',
    styleUrls: ['./chart9.component.scss'],
    imports: [ChartistModule]
})
export class Chart9Component implements OnInit {

  public chart9 = chartData.chart9;
 
  constructor() { }

  ngOnInit(): void {
  }

}

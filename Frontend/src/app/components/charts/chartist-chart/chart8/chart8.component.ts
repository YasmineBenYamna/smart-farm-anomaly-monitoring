import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart8',
    templateUrl: './chart8.component.html',
    styleUrls: ['./chart8.component.scss'],
    imports: [ChartistModule]
})
export class Chart8Component implements OnInit {

  public chart8 = chartData.chart8;
 
  constructor() { }

  ngOnInit(): void {
  }

}

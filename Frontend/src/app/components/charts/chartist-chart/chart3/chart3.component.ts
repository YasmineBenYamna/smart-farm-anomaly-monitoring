import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart3',
    templateUrl: './chart3.component.html',
    styleUrls: ['./chart3.component.scss'],
    imports: [ChartistModule]
})
export class Chart3Component implements OnInit {

  public chart3 = chartData.chart3;
 
  constructor() { }

  ngOnInit(): void {
  }

}

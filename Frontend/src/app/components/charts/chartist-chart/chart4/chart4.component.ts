import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart4',
    templateUrl: './chart4.component.html',
    styleUrls: ['./chart4.component.scss'],
    imports: [ChartistModule]
})
export class Chart4Component implements OnInit {

  public chart4 = chartData.chart4;
 
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/chartist'
import { ChartistModule } from 'ng-chartist';

@Component({
    selector: 'app-chart7',
    templateUrl: './chart7.component.html',
    styleUrls: ['./chart7.component.scss'],
    imports: [ChartistModule]
})
export class Chart7Component implements OnInit {

  public chart7 = chartData.chart7;
  
  constructor() { }

  ngOnInit(): void {
  }

}

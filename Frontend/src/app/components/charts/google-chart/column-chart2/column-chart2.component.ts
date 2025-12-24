import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-google-column-chart2',
    templateUrl: './column-chart2.component.html',
    styleUrls: ['./column-chart2.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class GoogleColumnChart2Component implements OnInit {

  public columnChart2 =  chartData.columnChart2
  
  constructor() { }

  ngOnInit(): void {
  }

}

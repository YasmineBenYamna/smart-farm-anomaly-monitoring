import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-bar-chart2',
    templateUrl: './bar-chart2.component.html',
    styleUrls: ['./bar-chart2.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class BarChart2Component implements OnInit {

  public barChart2 =  chartData.barChart2
  
  constructor() { }

  ngOnInit(): void {
  }

}

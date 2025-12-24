import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-area-chart2',
    templateUrl: './area-chart2.component.html',
    styleUrls: ['./area-chart2.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class AreaChart2Component implements OnInit {

  public areaChart2 =  chartData.areaChart2
 
  constructor() { }

  ngOnInit(): void {
  }

}

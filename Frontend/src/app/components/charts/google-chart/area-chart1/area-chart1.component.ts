import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-area-chart1',
    templateUrl: './area-chart1.component.html',
    styleUrls: ['./area-chart1.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class AreaChart1Component implements OnInit {

  public areaChart1 =  chartData.areaChart1
  
  constructor() { }

  ngOnInit(): void {
  }

}

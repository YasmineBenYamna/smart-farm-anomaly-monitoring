import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart2',
    templateUrl: './pie-chart2.component.html',
    styleUrls: ['./pie-chart2.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class PieChart2Component implements OnInit {

 
  public pieChart3 =  chartData.pieChart3
  constructor() { }

  ngOnInit(): void {
  }

}

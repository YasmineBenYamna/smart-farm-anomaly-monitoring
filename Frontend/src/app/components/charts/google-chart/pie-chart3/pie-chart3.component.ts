import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart3',
    templateUrl: './pie-chart3.component.html',
    styleUrls: ['./pie-chart3.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class PieChart3Component implements OnInit {

  
  public pieChart2 =  chartData.pieChart2
  constructor() { }

  ngOnInit(): void {
  }

}

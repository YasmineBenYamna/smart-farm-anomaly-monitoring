import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-pie-chart1',
    templateUrl: './pie-chart1.component.html',
    styleUrls: ['./pie-chart1.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class PieChart1Component implements OnInit {

  public pieChart4 =  chartData.pieChart3
 
  constructor() { }

  ngOnInit(): void {
  }

}

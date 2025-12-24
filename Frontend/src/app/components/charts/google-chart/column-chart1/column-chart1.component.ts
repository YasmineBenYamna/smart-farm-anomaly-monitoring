import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-column-chart1',
    templateUrl: './column-chart1.component.html',
    styleUrls: ['./column-chart1.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class ColumnChart1Component implements OnInit {

  public columnChart1 =  chartData.columnChart1
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-today-earning',
    templateUrl: './today-earning.component.html',
    styleUrls: ['./today-earning.component.scss'],
    imports: [NgApexchartsModule]
})
export class TodayEarningComponent implements OnInit {

  // chart data
  public earning = chartData.earning;

  constructor() { }

  ngOnInit(): void {
  }

}

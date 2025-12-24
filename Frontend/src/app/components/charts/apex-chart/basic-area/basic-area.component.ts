import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-basic-area',
    templateUrl: './basic-area.component.html',
    styleUrls: ['./basic-area.component.scss'],
    imports: [NgApexchartsModule]
})
export class BasicAreaComponent implements OnInit {
  
  public turnover =  chartData.splineArea1

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/apex'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-area-spaline',
    templateUrl: './area-spaline.component.html',
    styleUrls: ['./area-spaline.component.scss'],
    imports: [NgApexchartsModule]
})
export class AreaSpalineComponent implements OnInit {

  public areaSpalineChart = chartData.areaSpalineChart

  constructor() { }

  ngOnInit(): void {
  }

}

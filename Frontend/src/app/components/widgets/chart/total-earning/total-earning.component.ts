import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-total-earning',
    templateUrl: './total-earning.component.html',
    styleUrls: ['./total-earning.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class TotalEarningComponent implements OnInit {

  public earningchart = chartData.earningchart;

  constructor() { }

  ngOnInit(): void {
  }

}

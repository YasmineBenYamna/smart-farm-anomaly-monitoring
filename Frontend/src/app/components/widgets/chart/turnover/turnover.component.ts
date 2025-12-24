import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-turnover',
    templateUrl: './turnover.component.html',
    styleUrls: ['./turnover.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class TurnoverComponent implements OnInit {

  public turnover =  chartData.turnover
  constructor() { }

  ngOnInit(): void {
  }

}

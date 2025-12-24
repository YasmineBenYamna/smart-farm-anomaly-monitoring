import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class UserComponent implements OnInit {

  public userchart = chartData.userchart;

  constructor() { }

  ngOnInit(): void {
  }

}

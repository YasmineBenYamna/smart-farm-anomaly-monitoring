import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-marketing-expenses',
    templateUrl: './marketing-expenses.component.html',
    styleUrls: ['./marketing-expenses.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class MarketingExpensesComponent implements OnInit {

  public columnchart = chartData.columnchart

  constructor() { }

  ngOnInit(): void {
  }

}

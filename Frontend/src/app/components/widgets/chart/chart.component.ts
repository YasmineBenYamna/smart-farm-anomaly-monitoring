import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget'
import * as chartDatas from '../../../shared/data/components/widgest/charts/charts'
import { OrderStatus2Component } from './order-status2/order-status2.component';
import { FinanceComponent } from './finance/finance.component';
import { BrowserUsesComponent } from './browser-uses/browser-uses.component';
import { UserComponent } from './user/user.component';
import { MonthlySalesComponent } from './monthly-sales/monthly-sales.component';
import { TurnoverComponent } from './turnover/turnover.component';
import { LiveProductsComponent } from './live-products/live-products.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { SkillStatusComponent } from './skill-status/skill-status.component';
import { TotalEarningComponent } from './total-earning/total-earning.component';
import { MarketingExpensesComponent } from './marketing-expenses/marketing-expenses.component';
import { ChartsComponent } from './charts/charts.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    imports: [BreadcrumbComponent, ChartsComponent, MarketingExpensesComponent,
        TotalEarningComponent, SkillStatusComponent, OrderStatusComponent,
        LiveProductsComponent, TurnoverComponent, MonthlySalesComponent,
        UserComponent, BrowserUsesComponent, FinanceComponent, OrderStatus2Component]
})
export class ChartComponent implements OnInit {

  // charts
  public linechart1 = chartDatas.linechart1;
  public linechart2 = chartDatas.linechart2;
  public linechart3 = chartDatas.linechart3;

  constructor() { }

  ngOnInit(): void {
  }

}

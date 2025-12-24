import { Component, OnInit } from '@angular/core';
import { PremiumAccessComponent } from './premium-access/premium-access.component';
import { YearlyChartComponent } from './yearly-chart/yearly-chart.component';
import { TotalTransactionsComponent } from './total-transactions/total-transactions.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { OngoingProjectComponent } from './ongoing-project/ongoing-project.component';
import { NewsAndUpdateComponent } from './news-and-update/news-and-update.component';
import { WeeklyChartComponent } from './weekly-chart/weekly-chart.component';
import { TodayEarningComponent } from './today-earning/today-earning.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    imports: [BreadcrumbComponent, GetStartedComponent, TodayEarningComponent,
        WeeklyChartComponent, NewsAndUpdateComponent, OngoingProjectComponent,
        RecentActivityComponent, TotalTransactionsComponent,
        YearlyChartComponent, PremiumAccessComponent]
})
export class DefaultComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}

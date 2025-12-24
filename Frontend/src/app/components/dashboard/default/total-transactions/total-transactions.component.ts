import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-total-transactions',
    templateUrl: './total-transactions.component.html',
    styleUrls: ['./total-transactions.component.scss'],
    imports: [NgApexchartsModule, FeatherIconComponent]
})
export class TotalTransactionsComponent implements OnInit {
  
  // chart Data
  public transactionChart = chartData.transactionChart;

  constructor() { }

  ngOnInit(): void {
  }

}

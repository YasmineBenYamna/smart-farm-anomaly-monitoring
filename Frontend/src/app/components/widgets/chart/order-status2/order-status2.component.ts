import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
    selector: 'app-order-status2',
    templateUrl: './order-status2.component.html',
    styleUrls: ['./order-status2.component.scss'],
    imports: [NgApexchartsModule]
})
export class OrderStatus2Component implements OnInit {

  orderStatus2 = chartData.orderStatus2
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
    selector: 'app-order-status',
    templateUrl: './order-status.component.html',
    styleUrls: ['./order-status.component.scss'],
    imports: [NgApexchartsModule]
})
export class OrderStatusComponent implements OnInit {

  public process1 = chartData.process1
  public process2 = chartData.process2
  public process3 = chartData.process3
  public process4 = chartData.process4
  public process5 = chartData.process5
  constructor() { }

  ngOnInit(): void {
  }

}

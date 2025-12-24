import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-live-products',
    templateUrl: './live-products.component.html',
    styleUrls: ['./live-products.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class LiveProductsComponent implements OnInit {

  public productchart = chartData.productchart
  constructor() { }

  ngOnInit(): void {
  }

}

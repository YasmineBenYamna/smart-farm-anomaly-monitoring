import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-total-sale',
    templateUrl: './total-sale.component.html',
    styleUrls: ['./total-sale.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class TotalSaleComponent implements OnInit {

  // data
  public totalSale = chartData.totalSale;

  constructor() { }

  ngOnInit(): void {
  }

}

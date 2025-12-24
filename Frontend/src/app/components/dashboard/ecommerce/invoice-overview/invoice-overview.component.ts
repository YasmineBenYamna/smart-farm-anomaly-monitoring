import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-invoice-overview',
    templateUrl: './invoice-overview.component.html',
    styleUrls: ['./invoice-overview.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class InvoiceOverviewComponent implements OnInit {
  
  // chart data
  public column = chartData.column;

  constructor() { }

  ngOnInit(): void {
  }

}

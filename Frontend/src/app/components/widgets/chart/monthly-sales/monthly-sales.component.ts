import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-monthly-sales',
    templateUrl: './monthly-sales.component.html',
    styleUrls: ['./monthly-sales.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class MonthlySalesComponent implements OnInit {

  salesRadar = chartData.salesRadar
  constructor() { }

  ngOnInit(): void {
  }

}

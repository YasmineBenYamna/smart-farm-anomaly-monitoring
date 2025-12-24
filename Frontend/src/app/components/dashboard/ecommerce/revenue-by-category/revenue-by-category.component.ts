import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-revenue-by-category',
    templateUrl: './revenue-by-category.component.html',
    styleUrls: ['./revenue-by-category.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class RevenueByCategoryComponent implements OnInit {
  
  // chart data
  public pie = chartData.pie;

  constructor() { }

  ngOnInit(): void {
  }

}

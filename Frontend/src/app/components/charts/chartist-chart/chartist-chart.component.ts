import { Component, OnInit } from '@angular/core';
import { Chart12Component } from './chart12/chart12.component';
import { Chart11Component } from './chart11/chart11.component';
import { Chart10Component } from './chart10/chart10.component';
import { Chart9Component } from './chart9/chart9.component';
import { Chart8Component } from './chart8/chart8.component';
import { Chart7Component } from './chart7/chart7.component';
import { Chart6Component } from './chart6/chart6.component';
import { Chart5Component } from './chart5/chart5.component';
import { Chart4Component } from './chart4/chart4.component';
import { Chart3Component } from './chart3/chart3.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart1Component } from './chart1/chart1.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-chartist-chart',
    templateUrl: './chartist-chart.component.html',
    styleUrls: ['./chartist-chart.component.scss'],
    /*imports: [BreadcrumbComponent, Chart1Component, Chart2Component, Chart3Component,
        Chart4Component, Chart5Component, Chart6Component, Chart7Component, Chart8Component,
        Chart9Component, Chart10Component, Chart11Component, Chart12Component]*/
        imports:[BreadcrumbComponent,Chart10Component]
})
export class ChartistChartComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}

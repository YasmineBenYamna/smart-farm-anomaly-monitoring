import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { AreaChart1Component } from './area-chart1/area-chart1.component';
import { AreaChart2Component } from './area-chart2/area-chart2.component';
import { BarChart2Component } from './bar-chart2/bar-chart2.component';
import { ColumnChart1Component } from './column-chart1/column-chart1.component';
import { GoogleColumnChart2Component } from './column-chart2/column-chart2.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChart1Component } from './pie-chart1/pie-chart1.component';
import { PieChart2Component } from './pie-chart2/pie-chart2.component';
import { PieChart3Component } from './pie-chart3/pie-chart3.component';

@Component({
    selector: 'app-google-chart',
    templateUrl: './google-chart.component.html',
    styleUrls: ['./google-chart.component.scss'],
    imports: [BreadcrumbComponent, LineChartComponent]
})

export class GoogleChartComponent implements OnInit {
  
  ngOnInit(): void {
  }

}

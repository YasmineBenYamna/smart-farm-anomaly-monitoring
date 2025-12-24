import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { AreaSpalineComponent } from './area-spaline/area-spaline.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BasicAreaComponent } from './basic-area/basic-area.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './radial-bar-chart/radial-bar-chart.component';
import { SteplineChartComponent } from './stepline-chart/stepline-chart.component';

@Component({
    selector: 'app-apex-chart',
    templateUrl: './apex-chart.component.html',
    styleUrls: ['./apex-chart.component.scss'],
    imports: [BreadcrumbComponent, BasicAreaComponent, AreaSpalineComponent,
        BarChartComponent, ColumnChartComponent, BubbleChartComponent,
        SteplineChartComponent, PieChartComponent, DonutChartComponent,
        MixedChartComponent, CandlestickChartComponent, RadarChartComponent, RadialBarChartComponent]
})
export class ApexChartComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

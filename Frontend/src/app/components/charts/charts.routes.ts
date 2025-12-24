import { Routes } from '@angular/router';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'apex-chart',
    component: ApexChartComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'google-chart/:id',
    component: GoogleChartComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'chartjs',
    component: ChartjsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'chartist-chart',
    component: ChartistChartComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;


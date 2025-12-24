import { Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { GeneralComponent } from './general/general.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'chart',
    component: ChartComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'general',
    component: GeneralComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;

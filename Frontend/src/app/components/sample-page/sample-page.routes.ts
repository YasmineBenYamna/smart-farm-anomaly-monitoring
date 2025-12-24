import { Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: SamplePageComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


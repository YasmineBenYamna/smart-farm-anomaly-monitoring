import { Routes } from '@angular/router';
import { CalenderComponent } from './calender.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: '',
    component: CalenderComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;


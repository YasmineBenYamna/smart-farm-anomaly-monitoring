import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: '',
    component: ButtonsComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;


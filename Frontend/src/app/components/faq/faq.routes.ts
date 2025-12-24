import { Routes } from '@angular/router';
import { FaqComponent } from './faq.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: '',
    component: FaqComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;


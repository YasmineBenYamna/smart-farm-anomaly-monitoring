import { Routes } from '@angular/router';
import { ErrorPage1Component } from './error-page1/error-page1.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import { ErrorPage3Component } from './error-page3/error-page3.component';
import { ErrorPage4Component } from './error-page4/error-page4.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'error-page1',
    component: ErrorPage1Component,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'error-page2',
    component: ErrorPage2Component,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'error-page3',
    component: ErrorPage3Component,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'error-page4',
    component: ErrorPage4Component,
    data: { animation: [routingAnimation] }
  },
] as Routes;

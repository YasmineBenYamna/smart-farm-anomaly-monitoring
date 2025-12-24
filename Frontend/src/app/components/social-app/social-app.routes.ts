import { Routes } from '@angular/router';
import { SocialAppComponent } from './social-app.component';

var routingAnimation = localStorage.getItem('animate');

export default[
  {
    path: '',
    component:SocialAppComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


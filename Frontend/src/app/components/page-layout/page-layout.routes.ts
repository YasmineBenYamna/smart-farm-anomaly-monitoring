import { Routes } from '@angular/router';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { HideNavScrollComponent } from './hide-nav-scroll/hide-nav-scroll.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'footer-dark',
    component: FooterDarkComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'footer-fixed',
    component: FooterFixedComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'footer-light',
    component: FooterLightComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'hide-nav-scroll',
    component: HideNavScrollComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;

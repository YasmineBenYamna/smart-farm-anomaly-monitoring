import { Routes } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'crypto',
    component: CryptoComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'default',
    component: DefaultComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;

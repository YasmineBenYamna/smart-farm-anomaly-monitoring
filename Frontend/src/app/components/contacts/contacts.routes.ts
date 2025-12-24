import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: ContactsComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


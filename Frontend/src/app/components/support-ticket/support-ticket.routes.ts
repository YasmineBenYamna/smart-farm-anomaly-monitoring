import { Routes } from '@angular/router';
import { SupportTicketComponent } from './support-ticket.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: SupportTicketComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


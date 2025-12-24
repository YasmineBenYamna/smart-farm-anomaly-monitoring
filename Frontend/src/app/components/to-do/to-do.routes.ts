import { Routes } from '@angular/router';
import { ToDoComponent } from './to-do.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: ToDoComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


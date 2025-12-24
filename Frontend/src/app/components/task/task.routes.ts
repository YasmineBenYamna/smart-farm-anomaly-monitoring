import { TaskComponent } from './task.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component:TaskComponent,
    data: { animation: [routingAnimation]}
  }
];


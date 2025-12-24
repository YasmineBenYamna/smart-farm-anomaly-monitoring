import { Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark.component';

var routingAnimation = localStorage.getItem('animate') 

export default[
  {
    path: '',
    component: BookmarkComponent,
    data: { animation: [routingAnimation]}
  }
] as Routes;


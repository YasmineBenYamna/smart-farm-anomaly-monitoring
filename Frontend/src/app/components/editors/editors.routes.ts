import { Routes } from '@angular/router';
import { KolkovEditorsComponent } from './kolkov-editors/kolkov-editors.component';
import { NgxditorsComponent } from './ngx-editors/ngx-editors.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'ngx-editors',
    component: NgxditorsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'kolkov-editors',
    component: KolkovEditorsComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;
import { Routes } from '@angular/router';
import { BasicTablesComponent } from './bootstrap-tables/basic-tables/basic-tables.component';
import { BasicInitComponent } from './data-tables/basic-init/basic-init.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'bootstrap-tables',
    children: [
      {
        path: 'basic-tables',
        component: BasicTablesComponent,
        data: { animation: [routingAnimation] }
      },
    ]
  },
  {
    path: 'data-tables',
    children: [
      {
        path: 'basic-init',
        component: BasicInitComponent,
        data: { animation: [routingAnimation] }
      },

    ]
  },
] as Routes;

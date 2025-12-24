import { Routes } from '@angular/router';

export const full: Routes = [ 
  {
    path: 'error-page',
    loadChildren: () => import('../../pages/error-page/error-page.routes')
  },
  {
    path: 'authentication',
    loadChildren: () => import('../../pages/authentication/authentication.routes')
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('../../pages/coming-soon/coming-soon.routes')
  },
];



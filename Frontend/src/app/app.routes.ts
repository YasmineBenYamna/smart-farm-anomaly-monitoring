import { Routes } from '@angular/router';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { full } from './shared/routes/full';
import { content } from './shared/routes/routes/routers';
import { LoginComponent } from './auth/login/login.component';
import { Chart10Component } from './components/charts/chartist-chart/chart10/chart10.component';
import { LineChartComponent } from './components/charts/google-chart/line-chart/line-chart.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "sample-page",
    pathMatch: "full",
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "",
    component: ContentComponent,
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: "",
    component: FullComponent,
    canActivate: [AdminGuard],

    children: full,
  },
  {
    path: "**",
    redirectTo: "error-page/error-page1",
  },
];

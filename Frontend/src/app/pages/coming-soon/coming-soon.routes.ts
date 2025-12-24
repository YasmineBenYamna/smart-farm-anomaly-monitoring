import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingBgImageComponent } from './coming-bg-image/coming-bg-image.component';
import { ComingSimpleComponent } from './coming-simple/coming-simple.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'coming-simple',
    component: ComingSimpleComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'coming-bg-image',
    component: ComingBgImageComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;

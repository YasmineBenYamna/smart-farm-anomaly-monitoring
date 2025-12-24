import { Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { ProjectListComponent } from './project-list/project-list.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'create-new',
    component: CreateNewComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'project-list',
    component: ProjectListComponent,
    data: { animation: [routingAnimation] }
  },
] as Routes;


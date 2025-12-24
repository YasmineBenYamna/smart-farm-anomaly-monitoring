import { Routes } from '@angular/router';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { LearningListComponent } from './learning-list/learning-list.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'detailed-course',
    component: DetailedCourseComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'learning-list',
    component: LearningListComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;


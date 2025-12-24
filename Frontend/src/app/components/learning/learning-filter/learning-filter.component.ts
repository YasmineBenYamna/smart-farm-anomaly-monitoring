import { Component, OnInit } from '@angular/core';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { FindeCourseComponent } from './finde-course/finde-course.component';
@Component({
    selector: 'app-learning-filter',
    templateUrl: './learning-filter.component.html',
    styleUrls: ['./learning-filter.component.scss'],
    imports: [FindeCourseComponent, CategoriesComponent, UpcomingCoursesComponent]
})
export class LearningFilterComponent implements OnInit {

  OpenFilter: boolean = false
  constructor() { 
    
  }

  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
  ngOnInit(): void {
  }

}

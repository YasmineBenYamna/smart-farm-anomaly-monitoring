import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../shared/data/learning/learning'
import { UpcomingCoursesComponent } from '../../learning/learning-filter/upcoming-courses/upcoming-courses.component';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-knowledge-detail',
    templateUrl: './knowledge-detail.component.html',
    styleUrls: ['./knowledge-detail.component.scss'],
    imports: [BreadcrumbComponent, UpcomingCoursesComponent]
})
export class KnowledgeDetailComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = false;
  public Categories = filterData.Categories
  public upcomingCourses = filterData.upcomingCourses
  constructor() { }
  OpenFilter: Boolean =  false;
  ngOnInit(): void {
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }

}

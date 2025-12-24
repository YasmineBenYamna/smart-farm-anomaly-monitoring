import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbCollapse, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import * as filterData from '../../../../shared/data/learning/learning'


@Component({
    selector: 'app-upcoming-courses',
    templateUrl: './upcoming-courses.component.html',
    styleUrls: ['./upcoming-courses.component.scss'],
    imports: [NgbCollapse, NgbRating]
})
export class UpcomingCoursesComponent implements OnInit {
  public isCollapsed3 = false;

  public upcomingCourses = filterData.upcomingCourses
  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit(): void {
  }

}

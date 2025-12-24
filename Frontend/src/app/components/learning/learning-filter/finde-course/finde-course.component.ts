import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../../shared/data/learning/learning'

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-finde-course',
    templateUrl: './finde-course.component.html',
    styleUrls: ['./finde-course.component.scss'],
    imports: [NgbCollapse,]
})
export class FindeCourseComponent implements OnInit {

  public isCollapsed = false;

  public findCourse = filterData.findCourse

  constructor() { }

  ngOnInit(): void {
  }

}

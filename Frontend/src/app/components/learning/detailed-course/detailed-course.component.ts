import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/blog/blog'
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';
import { CommentBoxComponent } from '../../blog/blog-single/comment-box/comment-box.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-detailed-course',
    templateUrl: './detailed-course.component.html',
    styleUrls: ['./detailed-course.component.scss'],
    imports: [BreadcrumbComponent, CommentBoxComponent, LearningFilterComponent]
})
export class DetailedCourseComponent implements OnInit {

  public commentsData = data.commentsData

  constructor() { }

  ngOnInit(): void {
  }

}

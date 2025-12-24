import { Component, OnInit } from '@angular/core';
import * as Comments from '../../../shared/data/blog/blog'
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-blog-single',
    templateUrl: './blog-single.component.html',
    styleUrls: ['./blog-single.component.scss'],
    imports: [BreadcrumbComponent, CommentBoxComponent]
})
export class BlogSingleComponent implements OnInit {

  public CommentsData =  Comments.CommentsData
  constructor() { }

  ngOnInit(): void {
  }

}

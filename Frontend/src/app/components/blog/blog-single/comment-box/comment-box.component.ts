import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/blog/blog'

@Component({
    selector: 'app-comment-box',
    templateUrl: './comment-box.component.html',
    styleUrls: ['./comment-box.component.scss'],
    imports: []
})
export class CommentBoxComponent implements OnInit {

  public commentsData = data.commentsData
  constructor() { }

  ngOnInit(): void {
  }

}

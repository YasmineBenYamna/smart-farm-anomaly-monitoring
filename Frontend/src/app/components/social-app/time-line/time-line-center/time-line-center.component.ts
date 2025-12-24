import { Component, OnInit } from '@angular/core';
import { CommentTwoComponent } from './comment-two/comment-two.component';
import { CommentOneComponent } from './comment-one/comment-one.component';

@Component({
    selector: 'app-time-line-center',
    templateUrl: './time-line-center.component.html',
    styleUrls: ['./time-line-center.component.scss'],
    imports: [CommentOneComponent, CommentTwoComponent]
})
export class TimeLineCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

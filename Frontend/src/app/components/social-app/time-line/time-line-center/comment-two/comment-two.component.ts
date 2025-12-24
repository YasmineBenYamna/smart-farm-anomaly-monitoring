import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/social-app/social-app'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-comment-two',
    templateUrl: './comment-two.component.html',
    styleUrls: ['./comment-two.component.scss'],
    imports: [CommonModule]
})
export class CommentTwoComponent implements OnInit {

  replyMassage:any
  public massages = data.massages2
  constructor() { }

  ngOnInit(): void {
  }

}

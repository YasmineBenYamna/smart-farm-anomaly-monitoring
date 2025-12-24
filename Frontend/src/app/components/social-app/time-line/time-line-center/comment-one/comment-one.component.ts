import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/social-app/social-app'
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-comment-one',
    templateUrl: './comment-one.component.html',
    styleUrls: ['./comment-one.component.scss'],
    imports: [CommonModule]
})
export class CommentOneComponent implements OnInit {

  replyMassage:any
  public massages = data.massages
  constructor() { }

  ngOnInit(): void {
  }

}

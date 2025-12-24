import { Component, OnInit } from '@angular/core';
import * as userData from '../../../../shared/data/user/user'
import { DoubleComponent } from './double/double.component';
import { SinglePostComponent } from './single-post/single-post.component';

@Component({
    selector: 'app-right-content',
    templateUrl: './right-content.component.html',
    styleUrls: ['./right-content.component.scss'],
    imports: [SinglePostComponent, DoubleComponent]
})
export class RightContentComponent implements OnInit {

  public userPost = userData.userPost;
  public userPost2 = userData.userPost2;

  constructor() {
   }

  ngOnInit(): void {
  }

}

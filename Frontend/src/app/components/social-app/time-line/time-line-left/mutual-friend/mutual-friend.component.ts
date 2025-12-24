import { Component, OnInit } from '@angular/core';
import * as mutual from '../../../../../shared/data/social-app/social-app'

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-mutual-friend',
    templateUrl: './mutual-friend.component.html',
    styleUrls: ['./mutual-friend.component.scss'],
    imports: [NgbCollapse,]
})
export class MutualFriendComponent implements OnInit {
  public isCollapsed = false;

  public mutualFriend = mutual.mutualFriend
  constructor() { }

  ngOnInit(): void {
  }

}

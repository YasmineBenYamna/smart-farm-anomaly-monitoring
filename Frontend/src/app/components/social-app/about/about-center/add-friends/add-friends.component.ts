import { Component, OnInit } from '@angular/core';
import * as addFriendData from '../../../../../shared/data/social-app/social-app'

@Component({
    selector: 'app-add-friends',
    templateUrl: './add-friends.component.html',
    styleUrls: ['./add-friends.component.scss'],
    imports: []
})
export class AddFriendsComponent implements OnInit {

  // data

  public addFriend = addFriendData.addFriends
  constructor() { }

  ngOnInit(): void {
  }

}

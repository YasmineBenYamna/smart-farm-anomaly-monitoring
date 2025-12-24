import { Component, OnInit } from '@angular/core';
import { FriendsComponent } from '../../../users/users-profile/left-content/friends/friends.component';
import { LatestPhotosComponent } from '../../../users/users-profile/left-content/latest-photos/latest-photos.component';
import { FollowingsComponent } from '../../../users/users-profile/left-content/followings/followings.component';
import { FollowersComponent } from '../../../users/users-profile/left-content/followers/followers.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';

@Component({
    selector: 'app-time-line-right',
    templateUrl: './time-line-right.component.html',
    styleUrls: ['./time-line-right.component.scss'],
    imports: [ProfileIntroComponent, FollowersComponent, FollowingsComponent, LatestPhotosComponent, FriendsComponent]
})
export class TimeLineRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

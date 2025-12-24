import { Component, OnInit } from '@angular/core';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { MutualFriendComponent } from './mutual-friend/mutual-friend.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@Component({
    selector: 'app-time-line-left',
    templateUrl: './time-line-left.component.html',
    styleUrls: ['./time-line-left.component.scss'],
    imports: [MyProfileComponent, MutualFriendComponent, ActivityFeedComponent]
})
export class TimeLineLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

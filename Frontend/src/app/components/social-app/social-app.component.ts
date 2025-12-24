import { Component, OnInit } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutComponent } from './about/about.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../users/users-profile/user-profile/user-profile.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-social-app',
    templateUrl: './social-app.component.html',
    styleUrls: ['./social-app.component.scss'],
    imports: [BreadcrumbComponent, UserProfileComponent, CommonModule,
        TimeLineComponent, AboutComponent, FriendsComponent, PhotosComponent]
})
export class SocialAppComponent implements OnInit {
  active = 1;
  public openTab : string = "timeline";

  constructor() { }

  public tabbed(val: string) {
  	this.openTab = val
  }
  
  ngOnInit(): void {
  }

}

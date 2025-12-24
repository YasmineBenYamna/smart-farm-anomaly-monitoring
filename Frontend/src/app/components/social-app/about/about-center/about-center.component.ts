import { Component, OnInit } from '@angular/core';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ViewedYourProfileComponent } from './viewed-your-profile/viewed-your-profile.component';
import { EducationAndEmploymentComponent } from './education-and-employment/education-and-employment.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@Component({
    selector: 'app-about-center',
    templateUrl: './about-center.component.html',
    styleUrls: ['./about-center.component.scss'],
    imports: [AddFriendsComponent, HobbiesComponent, EducationAndEmploymentComponent, ViewedYourProfileComponent, ActivityLogComponent]
})
export class AboutCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

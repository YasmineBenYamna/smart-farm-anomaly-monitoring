import { Component, OnInit } from '@angular/core';
import { RightContentComponent } from './right-content/right-content.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-users-profile',
    templateUrl: './users-profile.component.html',
    styleUrls: ['./users-profile.component.scss'],
    imports: [BreadcrumbComponent, UserProfileComponent, LeftContentComponent, RightContentComponent]
})
export class UsersProfileComponent implements OnInit {
  public isProfile = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { RightContentComponent } from '../../users/users-profile/right-content/right-content.component';
import { LeftContentComponent } from '../../users/users-profile/left-content/left-content.component';
import { UserProfileComponent } from '../../users/users-profile/user-profile/user-profile.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-tour',
    templateUrl: './tour.component.html',
    styleUrls: ['./tour.component.scss'],
    imports: [BreadcrumbComponent, UserProfileComponent, LeftContentComponent, RightContentComponent]
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

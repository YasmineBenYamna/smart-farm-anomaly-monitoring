import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss'],
    imports: [BreadcrumbComponent, MyProfileComponent, EditProfileComponent]
})
export class UsersEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as userData from '../../../shared/data/user/user'
import { RouterLink } from '@angular/router';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-users-cards',
    templateUrl: './users-cards.component.html',
    styleUrls: ['./users-cards.component.scss'],
    imports: [BreadcrumbComponent, RouterLink]
})
export class UsersCardsComponent implements OnInit {

  // data
  public userCards = userData.userCards
  constructor() { }

  ngOnInit(): void {
  }

}

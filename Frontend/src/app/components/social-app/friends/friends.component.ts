import { Component, OnInit } from '@angular/core';
import * as userData from '../../../shared/data/user/user'
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
    imports: [RouterLink]
})
export class FriendsComponent implements OnInit {
  
  // data
  public userCards = userData.userCards

  constructor() { }

  ngOnInit(): void {
  }

}

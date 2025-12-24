import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-fri',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss'],
    imports: [NgbCollapse]
})
export class FriendsComponent implements OnInit {
  public isProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

}

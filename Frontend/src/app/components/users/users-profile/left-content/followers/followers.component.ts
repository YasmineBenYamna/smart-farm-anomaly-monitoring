import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-followers',
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.scss'],
    imports: [NgbCollapse]
})
export class FollowersComponent implements OnInit {
  public isProfile2 = false;
  constructor() { }

  ngOnInit(): void {
  }

}

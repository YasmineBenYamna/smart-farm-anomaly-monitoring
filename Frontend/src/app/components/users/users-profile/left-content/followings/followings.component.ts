import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-followings',
    templateUrl: './followings.component.html',
    styleUrls: ['./followings.component.scss'],
    imports: [NgbCollapse]
})
export class FollowingsComponent implements OnInit {
  public isProfile = false;
  constructor() { }

  ngOnInit(): void {
  }

}

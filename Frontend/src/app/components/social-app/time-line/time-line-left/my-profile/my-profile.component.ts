import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
    imports: [NgbCollapse]
})
export class MyProfileComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}

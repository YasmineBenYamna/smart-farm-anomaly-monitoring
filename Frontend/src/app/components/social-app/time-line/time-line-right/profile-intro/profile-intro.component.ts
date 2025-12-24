import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-profile-intro',
    templateUrl: './profile-intro.component.html',
    styleUrls: ['./profile-intro.component.scss'],
    imports: [NgbCollapse]
})
export class ProfileIntroComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}

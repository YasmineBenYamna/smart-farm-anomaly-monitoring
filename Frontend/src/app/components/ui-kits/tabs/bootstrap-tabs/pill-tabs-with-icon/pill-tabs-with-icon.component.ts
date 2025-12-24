import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pill-tabs-with-icon',
    templateUrl: './pill-tabs-with-icon.component.html',
    styleUrls: ['./pill-tabs-with-icon.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class PillTabsWithIconComponent implements OnInit {
  HomeActive = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}

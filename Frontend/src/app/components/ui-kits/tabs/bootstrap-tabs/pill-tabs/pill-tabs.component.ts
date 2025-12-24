import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pill-tabs',
    templateUrl: './pill-tabs.component.html',
    styleUrls: ['./pill-tabs.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class PillTabsComponent implements OnInit {
  HomeActive = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}

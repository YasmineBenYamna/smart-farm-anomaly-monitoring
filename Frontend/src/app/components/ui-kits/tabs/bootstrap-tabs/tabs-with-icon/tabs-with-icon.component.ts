import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tabs-with-icon',
    templateUrl: './tabs-with-icon.component.html',
    styleUrls: ['./tabs-with-icon.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class TabsWithIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

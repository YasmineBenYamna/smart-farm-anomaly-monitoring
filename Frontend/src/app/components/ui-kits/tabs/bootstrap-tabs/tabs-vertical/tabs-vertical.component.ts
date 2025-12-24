import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tabs-vertical',
    templateUrl: './tabs-vertical.component.html',
    styleUrls: ['./tabs-vertical.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class TabsVerticalComponent implements OnInit {
  TopActive = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}

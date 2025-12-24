import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tabs-right-align',
    templateUrl: './tabs-right-align.component.html',
    styleUrls: ['./tabs-right-align.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class TabsRightAlignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

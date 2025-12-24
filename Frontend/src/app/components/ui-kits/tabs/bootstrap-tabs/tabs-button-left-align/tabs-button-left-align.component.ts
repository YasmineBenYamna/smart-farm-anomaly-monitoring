import { Component, OnInit } from '@angular/core';
import { NgbNavOutlet, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tabs-button-left-align',
    templateUrl: './tabs-button-left-align.component.html',
    styleUrls: ['./tabs-button-left-align.component.scss'],
    imports: [NgbNavOutlet, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent]
})
export class TabsButtonLeftAlignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

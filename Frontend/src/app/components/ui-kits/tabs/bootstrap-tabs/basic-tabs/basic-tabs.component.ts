import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-basic-tabs',
    templateUrl: './basic-tabs.component.html',
    styleUrls: ['./basic-tabs.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem, NgbNavOutlet]
})
export class BasicTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

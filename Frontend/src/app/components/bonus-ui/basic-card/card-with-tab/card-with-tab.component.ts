import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-card-with-tab',
    templateUrl: './card-with-tab.component.html',
    styleUrls: ['./card-with-tab.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class CardWithTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

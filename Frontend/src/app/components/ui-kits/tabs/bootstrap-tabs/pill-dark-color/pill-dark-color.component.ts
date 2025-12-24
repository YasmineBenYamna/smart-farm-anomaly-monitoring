import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pill-dark-color',
    templateUrl: './pill-dark-color.component.html',
    styleUrls: ['./pill-dark-color.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class PillDarkColorComponent implements OnInit {
  HomeActive8 = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}

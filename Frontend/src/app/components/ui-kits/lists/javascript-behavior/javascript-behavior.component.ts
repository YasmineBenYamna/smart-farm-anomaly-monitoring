import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-javascript-behavior',
    templateUrl: './javascript-behavior.component.html',
    styleUrls: ['./javascript-behavior.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class JavascriptBehaviorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

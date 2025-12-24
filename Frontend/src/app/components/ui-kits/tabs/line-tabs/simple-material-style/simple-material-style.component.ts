import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple-material-style',
    templateUrl: './simple-material-style.component.html',
    styleUrls: ['./simple-material-style.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet]
})
export class SimpleMaterialStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-primary-color',
    templateUrl: './primary-color.component.html',
    styleUrls: ['./primary-color.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, TitleCasePipe]
})
export class PrimaryColorComponent implements OnInit {
  HomeActive8 = 'home';

  @Input() tabs:any

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-buy-sell',
    templateUrl: './buy-sell.component.html',
    styleUrls: ['./buy-sell.component.scss'],
    imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, BuyComponent, SellComponent, NgbNavOutlet]
})
export class BuySellComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

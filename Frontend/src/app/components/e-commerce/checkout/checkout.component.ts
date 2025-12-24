import { Component, OnInit } from '@angular/core';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
    imports: [BreadcrumbComponent, BillingDetailComponent, PlaceOrderComponent]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

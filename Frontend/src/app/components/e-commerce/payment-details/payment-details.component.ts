import { Component, OnInit } from '@angular/core';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { EmiComponent } from './emi/emi.component';
import { CodComponent } from './cod/cod.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-payment-details',
    templateUrl: './payment-details.component.html',
    styleUrls: ['./payment-details.component.scss'],
    imports: [BreadcrumbComponent, CreditCardComponent, DebitCardComponent, CodComponent, EmiComponent, NetBankingComponent]
})
export class PaymentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/e-commerce/pricing'

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class PricingComponent implements OnInit {

  public simplePricingCard = data.simplePricingCard
  public pricing = data.pricing
  constructor() { }

  ngOnInit(): void {
  }

}

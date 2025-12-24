import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/dashboard/ecommerce'

import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-recent-orders',
    templateUrl: './recent-orders.component.html',
    styleUrls: ['./recent-orders.component.scss'],
    imports: [FeatherIconComponent,]
})
export class RecentOrdersComponent implements OnInit {

  // data
  public productData = data.productData 
  constructor() { }

  ngOnInit(): void {
  }

}

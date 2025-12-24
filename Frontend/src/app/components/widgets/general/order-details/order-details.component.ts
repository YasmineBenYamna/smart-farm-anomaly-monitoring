import { Component, OnInit } from '@angular/core';
import * as generalData from '../../../../shared/data/components/widgest/general/general'
import { AngularSvgIconModule } from 'angular-svg-icon';

import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss'],
    imports: [FeatherIconComponent, AngularSvgIconModule]
})
export class OrderDetailsComponent implements OnInit {

  public orderDetails = generalData.orderDetails

  constructor() { 
 
  }

  ngOnInit(): void {
  }

}

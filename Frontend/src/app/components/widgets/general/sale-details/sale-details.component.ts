import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/widgest/general/general'
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sale-details',
    templateUrl: './sale-details.component.html',
    styleUrls: ['./sale-details.component.scss'],
    imports: [FeatherIconComponent, CommonModule]
})

export class SaleDetailsComponent implements OnInit {
  icon: any
  // data
  public saleDetails = data.saleDetails
  constructor() { }

  ngOnInit(): void {
  }

}

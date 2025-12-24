import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/bonus-ui/ribbons'

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-ribbons',
    templateUrl: './ribbons.component.html',
    styleUrls: ['./ribbons.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class RibbonsComponent implements OnInit {
  public ribbon = data.ribbons
  public ribbonColor = data.ribbonColor

  ribbonTop = ["primary", "primary", "primary"]
  constructor() { }

  ngOnInit(): void {
  }

 

}

import { Component, OnInit } from '@angular/core';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalStyleComponent } from './vertical-style/vertical-style.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { OfferBorderStyleComponent } from './offer-border-style/offer-border-style.component';
import { SolidBorderStyleComponent } from './solid-border-style/solid-border-style.component';
import { NoBorderComponent } from './no-border/no-border.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-mega-options',
    templateUrl: './mega-options.component.html',
    styleUrls: ['./mega-options.component.scss'],
    imports: [BreadcrumbComponent, DefaultStyleComponent, NoBorderComponent, SolidBorderStyleComponent, OfferBorderStyleComponent, InlineStyleComponent, VerticalStyleComponent, HorizontalComponent]
})
export class MegaOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

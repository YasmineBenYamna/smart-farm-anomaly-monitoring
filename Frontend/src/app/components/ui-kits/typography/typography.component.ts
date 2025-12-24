import { Component, OnInit } from '@angular/core';
import * as typographyData from '../../../shared/data/typography/typography'
import { BlockquotesComponent } from './blockquotes/blockquotes.component';
import { ListingTypographyComponent } from './listing-typography/listing-typography.component';
import { DisplayHeadingComponent } from './display-heading/display-heading.component';

import { HeadingsComponent } from './headings/headings.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
    imports: [BreadcrumbComponent, HeadingsComponent, DisplayHeadingComponent,
        ListingTypographyComponent, BlockquotesComponent]
})
export class TypographyComponent implements OnInit {
  dd : string = "Lorem ipsum dolor sit amet"
  index = 10
  public typography = typographyData.typography
  public textColor = typographyData.textColor
  
  constructor() { }

  ngOnInit(): void {
  }

}

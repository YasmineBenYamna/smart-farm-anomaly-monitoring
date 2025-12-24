import { Component, OnInit } from '@angular/core';
import * as cardData from '../../../shared/data/bonus-ui/bonus-ui'
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { HorizontalCardComponent } from './horizontal-card/horizontal-card.component';
import { ProfileCardsComponent } from './profile-cards/profile-cards.component';
import { CardWithTabComponent } from './card-with-tab/card-with-tab.component';
import { FaqTopPartComponent } from '../../faq/faq-top-part/faq-top-part.component';
import { CardWithBorderComponent } from './card-with-border/card-with-border.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-basic-card',
    templateUrl: './basic-card.component.html',
    styleUrls: ['./basic-card.component.scss'],
    imports: [BreadcrumbComponent, CardWithBorderComponent, FaqTopPartComponent,
        CardWithTabComponent, ProfileCardsComponent, HorizontalCardComponent, BlogCardsComponent]
})
export class BasicCardComponent implements OnInit {

  textColor: any
  public cards = cardData.cards
  constructor() { }

  ngOnInit(): void {
  }

}

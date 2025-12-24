import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/bonus-ui/bonus-ui'
import { CommonProfileCardComponent } from './common-profile-card/common-profile-card.component';
@Component({
    selector: 'app-profile-cards',
    templateUrl: './profile-cards.component.html',
    styleUrls: ['./profile-cards.component.scss'],
    imports: [CommonProfileCardComponent]
})
export class ProfileCardsComponent implements OnInit {

  public cardData1 = data.cardData1
  public cardData2 = data.cardData2
  constructor() { }

  ngOnInit(): void {
  }
  
}

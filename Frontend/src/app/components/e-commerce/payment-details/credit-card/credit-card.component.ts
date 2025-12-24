import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-credit-card',
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.scss'],
    imports: [FormsModule]
})
export class CreditCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

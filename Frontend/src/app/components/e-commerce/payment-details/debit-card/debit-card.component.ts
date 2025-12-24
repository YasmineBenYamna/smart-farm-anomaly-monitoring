import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-debit-card',
    templateUrl: './debit-card.component.html',
    styleUrls: ['./debit-card.component.scss'],
    imports: [FormsModule]
})
export class DebitCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

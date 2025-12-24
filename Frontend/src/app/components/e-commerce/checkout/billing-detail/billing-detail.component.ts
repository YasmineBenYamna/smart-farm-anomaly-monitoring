import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-billing-detail',
    templateUrl: './billing-detail.component.html',
    styleUrls: ['./billing-detail.component.scss'],
    imports: [FormsModule]
})
export class BillingDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

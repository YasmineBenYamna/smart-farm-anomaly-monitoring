import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-customer-feedback',
    templateUrl: './customer-feedback.component.html',
    styleUrls: ['./customer-feedback.component.scss'],
    imports: [AngularSvgIconModule]
})
export class CustomerFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

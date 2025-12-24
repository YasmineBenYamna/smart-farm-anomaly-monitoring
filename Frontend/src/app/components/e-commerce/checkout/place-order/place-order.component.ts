import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-place-order',
    templateUrl: './place-order.component.html',
    styleUrls: ['./place-order.component.scss'],
    imports: [RouterLink]
})
export class PlaceOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

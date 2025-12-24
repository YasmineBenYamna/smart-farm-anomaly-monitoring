import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.scss'],
    imports: [AngularSvgIconModule]
})
export class SellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

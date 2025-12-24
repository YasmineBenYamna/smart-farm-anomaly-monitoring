import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.scss'],
    imports: [AngularSvgIconModule, NgApexchartsModule]
})
export class CoinComponent implements OnInit {

  @Input() data: any
 
  constructor() { 
  }

  ngOnInit(): void {
  }

}

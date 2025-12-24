import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.scss'],
    imports: [AngularSvgIconModule]
})
export class BuyComponent implements OnInit {
  show = false
  constructor() { }

  // manu show
  openMenu(){
    this.show = !this.show
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-selling-and-buying',
    templateUrl: './selling-and-buying.component.html',
    styleUrls: ['./selling-and-buying.component.scss'],
    imports: [NgbCollapse]
})
export class SellingAndBuyingComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-description-tab',
    templateUrl: './description-tab.component.html',
    styleUrls: ['./description-tab.component.scss'],
    imports: [CommonModule]
})
export class DescriptionTabComponent implements OnInit {
  public openTab : string = "febric";

  constructor() { }
  public tabbed(val: string) {
  	this.openTab = val
  }
  ngOnInit(): void {
  }

}

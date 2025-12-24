import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-intellectual-property',
    templateUrl: './intellectual-property.component.html',
    styleUrls: ['./intellectual-property.component.scss'],
    imports: [NgbCollapse]
})
export class IntellectualPropertyComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  constructor() { }

  ngOnInit(): void {
  }

}

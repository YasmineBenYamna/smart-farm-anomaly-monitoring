import { Component, Input, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-color-tabs',
    templateUrl: './color-tabs.component.html',
    styleUrls: ['./color-tabs.component.scss'],
    imports: [NgbNavModule]
})
export class ColorTabsComponent implements OnInit {

  @Input() tabs: any
  constructor() { }

  ngOnInit(): void {
  }

}

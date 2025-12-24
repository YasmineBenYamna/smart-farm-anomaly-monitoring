import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-style-right-tab',
    templateUrl: './style-right-tab.component.html',
    styleUrls: ['./style-right-tab.component.scss'],
    imports: [NgbNavModule]
})

export class StyleRightTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

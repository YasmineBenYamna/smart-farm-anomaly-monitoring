import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple-style-bottom-tab',
    templateUrl: './simple-style-bottom-tab.component.html',
    styleUrls: ['./simple-style-bottom-tab.component.scss'],
    imports: [NgbNavModule]
})
export class SimpleStyleBottomTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

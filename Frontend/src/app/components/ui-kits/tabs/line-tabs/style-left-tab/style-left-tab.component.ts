import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-style-left-tab',
    templateUrl: './style-left-tab.component.html',
    styleUrls: ['./style-left-tab.component.scss'],
    imports: [NgbNavModule]
})
export class StyleLeftTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

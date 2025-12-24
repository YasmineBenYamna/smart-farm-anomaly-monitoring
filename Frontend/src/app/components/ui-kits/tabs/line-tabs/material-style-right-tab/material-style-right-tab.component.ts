import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-material-style-right-tab',
    templateUrl: './material-style-right-tab.component.html',
    styleUrls: ['./material-style-right-tab.component.scss'],
    imports: [NgbNavModule]
})
export class MaterialStyleRightTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

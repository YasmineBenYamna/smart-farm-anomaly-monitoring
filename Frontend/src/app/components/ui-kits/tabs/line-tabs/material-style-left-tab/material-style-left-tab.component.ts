import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-material-style-left-tab',
    templateUrl: './material-style-left-tab.component.html',
    styleUrls: ['./material-style-left-tab.component.scss'],
    imports: [NgbNavModule]
})
export class MaterialStyleLeftTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

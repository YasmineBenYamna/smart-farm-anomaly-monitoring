import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-basic-accordion',
    templateUrl: './basic-accordion.component.html',
    styleUrls: ['./basic-accordion.component.scss'],
    imports: [NgbAccordionModule]
})
export class BasicAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

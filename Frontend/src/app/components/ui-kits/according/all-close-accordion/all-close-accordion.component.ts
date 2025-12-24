import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-all-close-accordion',
    templateUrl: './all-close-accordion.component.html',
    styleUrls: ['./all-close-accordion.component.scss'],
    imports: [NgbAccordionModule]
})
export class AllCloseAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

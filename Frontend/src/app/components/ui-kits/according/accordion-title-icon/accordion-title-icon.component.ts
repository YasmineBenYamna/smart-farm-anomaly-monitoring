import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-accordion-title-icon',
    templateUrl: './accordion-title-icon.component.html',
    styleUrls: ['./accordion-title-icon.component.scss'],
    imports: [NgbAccordionModule]
})
export class AccordionTitleIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

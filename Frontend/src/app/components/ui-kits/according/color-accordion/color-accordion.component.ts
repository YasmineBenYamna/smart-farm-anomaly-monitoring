import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-color-accordion',
    templateUrl: './color-accordion.component.html',
    styleUrls: ['./color-accordion.component.scss'],
    imports: [NgbAccordionModule]
})
export class ColorAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

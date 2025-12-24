import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-icon-open-close-icon',
    templateUrl: './icon-open-close-icon.component.html',
    styleUrls: ['./icon-open-close-icon.component.scss'],
    imports: [NgbAccordionModule]
})
export class IconOpenCloseIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

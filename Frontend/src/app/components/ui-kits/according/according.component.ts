import { Component, OnInit } from '@angular/core';
import { IconOpenCloseIconComponent } from './icon-open-close-icon/icon-open-close-icon.component';
import { AccordionTitleIconComponent } from './accordion-title-icon/accordion-title-icon.component';
import { ColorAccordionComponent } from './color-accordion/color-accordion.component';
import { AllCloseAccordionComponent } from './all-close-accordion/all-close-accordion.component';
import { BasicAccordionComponent } from './basic-accordion/basic-accordion.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-according',
    templateUrl: './according.component.html',
    styleUrls: ['./according.component.scss'],
    imports: [BreadcrumbComponent, BasicAccordionComponent, AllCloseAccordionComponent,
        ColorAccordionComponent, AccordionTitleIconComponent, IconOpenCloseIconComponent]
})
export class AccordingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SupportedElementsComponent } from './supported-elements/supported-elements.component';
import { BrowserDefaultsComponent } from './browser-defaults/browser-defaults.component';
import { CustomStylesComponent } from './custom-styles/custom-styles.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss'],
    imports: [BreadcrumbComponent, CustomStylesComponent, BrowserDefaultsComponent, SupportedElementsComponent]
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

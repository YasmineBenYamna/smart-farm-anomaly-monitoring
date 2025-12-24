import { Component, OnInit } from '@angular/core';
import { AnimatedCheckboxButtonsComponent } from './animated-checkbox-buttons/animated-checkbox-buttons.component';
import { AnimatedRadioButtonsComponent } from './animated-radio-buttons/animated-radio-buttons.component';
import { SquareCheckboxComponent } from './square-checkbox/square-checkbox.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-checkbox-radio',
    templateUrl: './checkbox-radio.component.html',
    styleUrls: ['./checkbox-radio.component.scss'],
    imports: [BreadcrumbComponent, CustomCheckboxComponent, CustomRadioComponent, SquareCheckboxComponent, AnimatedRadioButtonsComponent, AnimatedCheckboxButtonsComponent]
})
export class CheckboxRadioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomControlsComponent } from './custom-controls/custom-controls.component';
import { InputSizingComponent } from './input-sizing/input-sizing.component';
import { SolidInputStyleComponent } from './solid-input-style/solid-input-style.component';
import { RaiseInputStyleComponent } from './raise-input-style/raise-input-style.component';
import { FlatInputStyleComponent } from './flat-input-style/flat-input-style.component';
import { EdgesInputStyleComponent } from './edges-input-style/edges-input-style.component';
import { BasicHtmlInputControlComponent } from './basic-html-input-control/basic-html-input-control.component';
import { BasicFormControlComponent } from './basic-form-control/basic-form-control.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-base-inputs',
    templateUrl: './base-inputs.component.html',
    styleUrls: ['./base-inputs.component.scss'],
    imports: [BreadcrumbComponent, BasicFormControlComponent, BasicHtmlInputControlComponent, EdgesInputStyleComponent, FlatInputStyleComponent, RaiseInputStyleComponent, SolidInputStyleComponent, InputSizingComponent, CustomControlsComponent]
})
export class BaseInputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

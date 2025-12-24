import { Routes } from '@angular/router';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { DefaultFormsComponent } from './form-layout/default-forms/default-forms.component';
import { ClipboardComponent } from './form-widgets/clipboard/clipboard.component';
import { DateRangepickerComponent } from './form-widgets/date-rangepicker/date-rangepicker.component';
import { DatepickerComponent } from './form-widgets/datepicker/datepicker.component';
import { Select2Component } from './form-widgets/select2/select2.component';
import { SwitchComponent } from './form-widgets/switch/switch.component';
import { TimepickerComponent } from './form-widgets/timepicker/timepicker.component';
import { TouchspinComponent } from './form-widgets/touchspin/touchspin.component';
import { TypeaheadComponent } from './form-widgets/typeahead/typeahead.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'form-controls',
    children: [
      {
        path: 'form-validation',
        component: FormValidationComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'base-inputs',
        component: BaseInputsComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'checkbox-radio',
        component: CheckboxRadioComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'mega-options',
        component: MegaOptionsComponent,
        data: { animation: [routingAnimation] }
      }
    ]
  },
  {
    path: 'form-widgets',
    children: [
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'timepicker',
        component: TimepickerComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'date-rangepicker',
        component: DateRangepickerComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'touchspin',
        component: TouchspinComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'select2',
        component: Select2Component,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'switch',
        component: SwitchComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'typeahead',
        component: TypeaheadComponent,
        data: { animation: [routingAnimation] }
      },
      {
        path: 'clipboard',
        component: ClipboardComponent,
        data: { animation: [routingAnimation] }
      },
    ]
  },
  {
    path: 'form-layout',
    children: [
      {
        path: 'default-forms',
        component: DefaultFormsComponent,
        data: { animation: [routingAnimation] }
      }
    ]
  }
] as Routes;

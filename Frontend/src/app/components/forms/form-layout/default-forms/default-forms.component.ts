import { Component, OnInit } from '@angular/core';
import { InlineFormComponent } from './inline-form/inline-form.component';
import { HorizontalFormLayoutComponent } from './horizontal-form-layout/horizontal-form-layout.component';
import { MegaFormComponent } from './mega-form/mega-form.component';
import { DefaultFormLayoutComponent } from './default-form-layout/default-form-layout.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-default-forms',
    templateUrl: './default-forms.component.html',
    styleUrls: ['./default-forms.component.scss'],
    imports: [BreadcrumbComponent, DefaultFormLayoutComponent, MegaFormComponent, HorizontalFormLayoutComponent, InlineFormComponent]
})
export class DefaultFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

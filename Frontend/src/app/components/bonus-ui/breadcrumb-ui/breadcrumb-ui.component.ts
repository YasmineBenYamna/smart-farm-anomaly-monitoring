import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-breadcrumb-ui',
    templateUrl: './breadcrumb-ui.component.html',
    styleUrls: ['./breadcrumb-ui.component.scss'],
    imports: [BreadcrumbComponent]
})
export class BreadcrumbUiComponent implements OnInit {

  breadcrumb = [ "primary", "secondary", "success", "info", "warning", "danger", "light", 'dark']
  constructor() { }

  ngOnInit(): void {
  }

}

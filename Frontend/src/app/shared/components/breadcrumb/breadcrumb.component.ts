import { Component, Input, OnInit } from '@angular/core';

import { FeatherIconComponent } from '../feather-icon/feather-icon.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    imports: [RouterLink, FeatherIconComponent,]
})
export class BreadcrumbComponent implements OnInit {
 
  @Input() title: any;
  @Input() items!: any[];
  @Input() active_item: any;

  constructor() { }

  ngOnInit(): void {
  }

}

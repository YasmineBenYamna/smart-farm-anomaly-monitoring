import { Component, OnInit } from '@angular/core';
import { PaginationSizingComponent } from './pagination-sizing/pagination-sizing.component';
import { PaginationColorComponent } from './pagination-color/pagination-color.component';
import { PaginationActiveDisabledComponent } from './pagination-active-disabled/pagination-active-disabled.component';
import { PaginationAlignmentComponent } from './pagination-alignment/pagination-alignment.component';
import { PaginationIconsComponent } from './pagination-icons/pagination-icons.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    imports: [BreadcrumbComponent, PaginationIconsComponent, PaginationAlignmentComponent,
        PaginationActiveDisabledComponent, PaginationColorComponent, PaginationSizingComponent]
})
export class PaginationComponent implements OnInit {
  pagination = ["primary", "secondary", "success", "info", "warning", "danger" ]
  constructor() { }

  ngOnInit(): void {
  }

}

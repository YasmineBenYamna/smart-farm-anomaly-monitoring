import { Component, OnInit } from '@angular/core';
import { OffsetComponent } from './offset/offset.component';
import { OrderComponent } from './order/order.component';
import { NestingColumnComponent } from './nesting-column/nesting-column.component';
import { HorizontalAlignmentComponent } from './horizontal-alignment/horizontal-alignment.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';
import { RowColumnComponent } from './row-column/row-column.component';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridOptionComponent } from './grid-option/grid-option.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    imports: [BreadcrumbComponent, GridOptionComponent, GridColumnComponent,
        RowColumnComponent, VerticalAlignmentComponent, HorizontalAlignmentComponent,
        NestingColumnComponent, OrderComponent, OffsetComponent]
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

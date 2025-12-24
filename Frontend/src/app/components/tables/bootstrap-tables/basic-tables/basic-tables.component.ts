import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/table/tableData'
import * as tableData from '../../../../shared/data/table/sizing-tables'
import * as borderData from '../../../../shared/data/table/border-tables'
import { CommonBorderTableComponent } from './common-border-table/common-border-table.component';
import { CustomWithHoverComponent } from './custom-with-hover/custom-with-hover.component';
import { CommonSizingTableComponent } from './common-sizing-table/common-sizing-table.component';
import { ResponsiveTablesComponent } from './responsive-tables/responsive-tables.component';
import { BreckpointComponent } from './breckpoint/breckpoint.component';
import { StripedRowInverseComponent } from './striped-row-inverse/striped-row-inverse.component';
import { HeadOptionsComponent } from './head-options/head-options.component';
import { CaptionComponent } from './caption/caption.component';
import { InversePrimaryBgComponent } from './inverse-primary-bg/inverse-primary-bg.component';
import { HoverableRowsComponent } from './hoverable-rows/hoverable-rows.component';
import { InverseTableComponent } from './inverse-table/inverse-table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-basic-tables',
    templateUrl: './basic-tables.component.html',
    styleUrls: ['./basic-tables.component.scss'],
    imports: [BreadcrumbComponent, BasicTableComponent, InverseTableComponent,
        HoverableRowsComponent, InversePrimaryBgComponent, CaptionComponent,
        HeadOptionsComponent, StripedRowInverseComponent, BreckpointComponent,
        ResponsiveTablesComponent, CommonSizingTableComponent,
        CustomWithHoverComponent, CommonBorderTableComponent]
})
export class BasicTablesComponent implements OnInit {
  
  public contextual = data.contextual
  public textOrBgUtilities = data.textOrBgUtilities
  public table2 = data.table2
  public table = data.table
  public tablesXl = tableData.sizingTablesXl
  public borderTableHorizontal = borderData.borderTableHorizontal

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'
import { FeatherIconComponent } from '../../../../../shared/components/feather-icon/feather-icon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hoverable-rows',
    templateUrl: './hoverable-rows.component.html',
    styleUrls: ['./hoverable-rows.component.scss'],
    imports: [CommonModule, FeatherIconComponent]
})
export class HoverableRowsComponent implements OnInit {
  public table = data.table

  constructor() { }

  ngOnInit(): void {
  }

}

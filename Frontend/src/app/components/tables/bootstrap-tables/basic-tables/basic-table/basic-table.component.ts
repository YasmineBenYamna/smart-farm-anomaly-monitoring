import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-basic-table',
    templateUrl: './basic-table.component.html',
    styleUrls: ['./basic-table.component.scss'],
    imports: []
})
export class BasicTableComponent implements OnInit {
  public table = data.tableData3

  constructor() { }

  ngOnInit(): void {
  }

}

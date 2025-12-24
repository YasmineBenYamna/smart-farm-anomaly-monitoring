import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-striped-row',
    templateUrl: './striped-row.component.html',
    styleUrls: ['./striped-row.component.scss'],
    imports: [],,
    imports: []
})
export class StripedRowComponent implements OnInit {

  public table2 = data.table2
  constructor() { }

  ngOnInit(): void {
  }

}

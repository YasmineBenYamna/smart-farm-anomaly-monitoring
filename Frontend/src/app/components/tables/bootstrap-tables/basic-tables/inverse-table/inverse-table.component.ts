import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-inverse-table',
    templateUrl: './inverse-table.component.html',
    styleUrls: ['./inverse-table.component.scss'],
    imports: []
})
export class InverseTableComponent implements OnInit {

  public inverse = data.inverse

  constructor() { }

  ngOnInit(): void {
  }

}

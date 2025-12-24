import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-striped-row-inverse',
    templateUrl: './striped-row-inverse.component.html',
    styleUrls: ['./striped-row-inverse.component.scss'],
    imports: []
})
export class StripedRowInverseComponent implements OnInit {

  public table2 = data.table2
  constructor() { }

  ngOnInit(): void {
  }

}

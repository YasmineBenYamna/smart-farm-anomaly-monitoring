import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-inverse-primary-bg',
    templateUrl: './inverse-primary-bg.component.html',
    styleUrls: ['./inverse-primary-bg.component.scss'],
    imports: []
})
export class InversePrimaryBgComponent implements OnInit {

  public table = data.tableData3

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-caption',
    templateUrl: './caption.component.html',
    styleUrls: ['./caption.component.scss'],
    imports: []
})
export class CaptionComponent implements OnInit {

  public table2 = data.table2

  constructor() { }

  ngOnInit(): void {
  }

}

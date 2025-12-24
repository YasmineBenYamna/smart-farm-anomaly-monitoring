import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-text-bg-utilities',
    templateUrl: './text-bg-utilities.component.html',
    styleUrls: ['./text-bg-utilities.component.scss'],
    imports: [],,
    imports: []
})
export class TextBgUtilitiesComponent implements OnInit {

  public textOrBgUtilities = data.textOrBgUtilities

  constructor() { }

  ngOnInit(): void {
  }

}

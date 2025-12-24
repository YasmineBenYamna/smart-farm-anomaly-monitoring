import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-breckpoint',
    templateUrl: './breckpoint.component.html',
    styleUrls: ['./breckpoint.component.scss'],
    imports: []
})
export class BreckpointComponent implements OnInit {

  public breckpointSpecific = data.breckpointSpecific

  constructor() { }

  ngOnInit(): void {
  }

}

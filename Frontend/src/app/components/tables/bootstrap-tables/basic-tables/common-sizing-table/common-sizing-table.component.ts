import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-common-sizing-table',
    templateUrl: './common-sizing-table.component.html',
    styleUrls: ['./common-sizing-table.component.scss'],
    imports: []
})
export class CommonSizingTableComponent implements OnInit {

  @Input() table: any
  constructor() { }

  ngOnInit(): void {
  }

}

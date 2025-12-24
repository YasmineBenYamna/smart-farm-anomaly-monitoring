import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-common-border-table',
    templateUrl: './common-border-table.component.html',
    styleUrls: ['./common-border-table.component.scss'],
    imports: []
})
export class CommonBorderTableComponent implements OnInit {

  @Input() table:any
  
  constructor() { }

  ngOnInit(): void {
  }

}

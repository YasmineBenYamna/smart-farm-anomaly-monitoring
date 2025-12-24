import { Component, OnInit } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData'


@Component({
    selector: 'app-contextual-classes',
    templateUrl: './contextual-classes.component.html',
    styleUrls: ['./contextual-classes.component.scss'],
    imports: []
})
export class ContextualClassesComponent implements OnInit {
  public contextual = data.contextual

  constructor() { }

  ngOnInit(): void {
  }

}

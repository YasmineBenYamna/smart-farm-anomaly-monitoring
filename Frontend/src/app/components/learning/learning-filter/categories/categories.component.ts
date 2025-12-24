import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../../shared/data/learning/learning'

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    imports: [NgbCollapse,]
})
export class CategoriesComponent implements OnInit {

  public isCollapsed2 = false;
  public Categories = filterData.Categories

  constructor() { }

  ngOnInit(): void {
  }

}

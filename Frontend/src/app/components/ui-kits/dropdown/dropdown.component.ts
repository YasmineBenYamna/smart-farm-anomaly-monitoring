import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/dropdown'
import { DropdownBottomComponentComponent } from './dropdown-bottom-component/dropdown-bottom-component.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { TitleCasePipe } from '@angular/common';
@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    imports: [BreadcrumbComponent, DropdownBottomComponentComponent, TitleCasePipe]
})
export class DropdownComponent implements OnInit {

  public basicColorDropdown = data.basicColorDropdown
  constructor() { }

  ngOnInit(): void {
  }

}

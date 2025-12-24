import { Component, OnInit } from '@angular/core';
import { BasicInputGroups2Component } from './basic-input-groups2/basic-input-groups2.component';
import { BasicInputGroupsComponent } from './basic-input-groups/basic-input-groups.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-input-groups',
    templateUrl: './input-groups.component.html',
    styleUrls: ['./input-groups.component.scss'],
    imports: [BreadcrumbComponent, BasicInputGroupsComponent, BasicInputGroups2Component]
})
export class InputGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

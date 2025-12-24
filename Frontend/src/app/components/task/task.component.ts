import { Component, OnInit } from '@angular/core';
import { TaskTabComponent } from './task-tab/task-tab.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    imports: [BreadcrumbComponent, TaskFilterComponent, TaskTabComponent]
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

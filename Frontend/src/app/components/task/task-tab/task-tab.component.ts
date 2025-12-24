import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-task-tab',
    templateUrl: './task-tab.component.html',
    styleUrls: ['./task-tab.component.scss'],
    imports: [FeatherIconComponent]
})

export class TaskTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

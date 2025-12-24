import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from '../modal/new-task/new-task.component';
import { TaskTagsComponent } from '../modal/task-tags/task-tags.component';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-task-filter',
    templateUrl: './task-filter.component.html',
    styleUrls: ['./task-filter.component.scss'],
    imports: [FeatherIconComponent]
})
export class TaskFilterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  open = false;
  ngOnInit(): void {
  }
  // manu open
  openMenu(){
    this.open = !this.open
  }
  openNewTask(){
    const modalRef = this.modalService.open(NewTaskComponent, { size: 'lg' });
  }

  openTaskTag(){
    const modalRef = this.modalService.open(TaskTagsComponent, { size: 'lg' });
  }
}

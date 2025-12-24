import { Component, NgModule, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-task-tags',
    templateUrl: './task-tags.component.html',
    styleUrls: ['./task-tags.component.scss'],
    imports: [],
})
export class TaskTagsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  

}

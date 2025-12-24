import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-print-modal',
    templateUrl: './print-modal.component.html',
    styleUrls: ['./print-modal.component.scss'],
    imports: [],
})
export class PrintModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

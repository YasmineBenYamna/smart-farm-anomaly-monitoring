import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-basic-modal',
    templateUrl: './basic-modal.component.html',
    styleUrls: ['./basic-modal.component.scss'],
    imports: [],
})
export class BasicModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  
  simpleModal(simpleContent:any){
    const modalRef = this.modalService.open(simpleContent);
  }

  scrollingModal(scrollingContent: any){
    const modalRef = this.modalService.open(scrollingContent);
  }

  gridModal(gridContent:any){
    const modalRef = this.modalService.open(gridContent);
  }

  tooltipsModal(tooltipContent:any){
    const modalRef = this.modalService.open(tooltipContent);
  }

  VerticallyCenteredModal(verticallyContent:any){
    const modalRef = this.modalService.open(verticallyContent);
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { StaticExampleComponent } from './static-example/static-example.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    imports: [BreadcrumbComponent, StaticExampleComponent, BasicModalComponent]
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
 
  lmModal(content:any){
    const modalRef = this.modalService.open(content,{ size: 'lg' });
  }
  smModal(lmcontent:any){
    const modalRef = this.modalService.open(lmcontent,{ size: 'sm' });
  }
  xlModal(xlcontent:any){
    const modalRef = this.modalService.open(xlcontent,{ size: 'xl' });
  }
  openMdoModal(modContent:any){
    const modalRef = this.modalService.open(modContent);
  }
  openFatModal(fatContent:any){
    const modalRef = this.modalService.open(fatContent);
  }
  openGetBootstrapModal(getContent:any){
    const modalRef = this.modalService.open(getContent);
  }

  

 
  
  
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../shared/data/contact/contact'
import { PrintModalComponent } from '../print-modal/print-modal.component';
import { AddressContentComponent } from './edit-from/address-content/address-content.component';
import { PersonalContentComponent } from './edit-from/personal-content/personal-content.component';
import { GeneralComponent } from './edit-from/general/general.component';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss'],
    imports: [CommonModule, GeneralComponent, PersonalContentComponent, AddressContentComponent]
})

export class PersonalComponent implements OnInit {
  public history: boolean = false;
  public editContact: boolean = false;
  public contacts = data.contactData.contact
  public open: boolean = false


  public days = ["01", "02", "03","04"]
  public months = ["January", "February", "March","April", "May", "June", "July", "August", "September","October", "November", "December"]

  constructor(private modalService: NgbModal) { }


  showHistory() {
    this.history = !this.history;
  }
  ngOnInit(): void {
  }
  
  deleteContact(){
    Swal.fire({
      title: 'Are you sure?',
      text: "This contact will be deleted from your Personal Contacts and from the chat list too. ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    }).then((result:any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  openPrint(){
    const modalRef = this.modalService.open(PrintModalComponent, { size: 'lg' });
  }
  openHistory(){
    this.open = !this.open
  }

}

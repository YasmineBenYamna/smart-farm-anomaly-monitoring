import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-sweet-alert2',
    templateUrl: './sweet-alert2.component.html',
    styleUrls: ['./sweet-alert2.component.scss'],
    imports: [BreadcrumbComponent]
})
export class SweetAlert2Component implements OnInit {

  // Basic Alert
  basicAlert() {
    Swal.fire('Hello world!')
  }

  // Alert Title
  withTitle() {
    Swal.fire({

      title: "Here's the title!",
      text: "...and here's the text!",
    }
    )
  }

  // Info

  info() {
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Alert Title
  successAlert() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'info'
    )
  }

  withCancelled() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this imaginary file! ",
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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (result.isDismissed) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  // warning
  warning() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login: any) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }
  // A warning
  warning2() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'warning'
    )
  }
  // A warning
  success() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'success'
    )
  }
  // Info
  info2() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'info'
    )
  }
  // Danger
  danger() {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'error'
    )
  }
  dialogWithThree() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  customAnimation() {
    let timerInterval: any;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: ( SwalInstance: any ) => {
        SwalInstance.showLoading();
        const b = SwalInstance.htmlContainer.querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = SwalInstance.timerLeft;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.isDismissed && result.dismiss === Swal.DismissReason.timer) {
        console.log('Timer expired');
      }
    });
  }
  dialog() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-create-password',
    templateUrl: './create-password.component.html',
    styleUrls: ['./create-password.component.scss'],
    imports: []
})
export class CreatePasswordComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}

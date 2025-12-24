import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-image-two',
    templateUrl: './login-image-two.component.html',
    styleUrls: ['./login-image-two.component.scss'],
    imports: [FeatherIconComponent]
})
export class LoginImageTwoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }


}

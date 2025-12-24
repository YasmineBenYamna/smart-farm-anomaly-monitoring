import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';


@Component({
    selector: 'app-image-one',
    templateUrl: './register-image-one.component.html',
    styleUrls: ['./register-image-one.component.scss'],
    imports: [FeatherIconComponent]
})
export class RegisterImageOneComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
}

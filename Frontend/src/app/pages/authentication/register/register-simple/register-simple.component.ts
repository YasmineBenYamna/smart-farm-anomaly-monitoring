import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-simple',
    templateUrl: './register-simple.component.html',
    styleUrls: ['./register-simple.component.scss'],
    imports: [FeatherIconComponent]
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }
}

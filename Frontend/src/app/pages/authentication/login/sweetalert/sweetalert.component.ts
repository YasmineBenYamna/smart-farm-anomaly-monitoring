import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';


@Component({
    selector: 'app-sweetalert',
    templateUrl: './sweetalert.component.html',
    styleUrls: ['./sweetalert.component.scss'],
    imports: [FeatherIconComponent]
})
export class SweetalertComponent implements OnInit {

 
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }


}

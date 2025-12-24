import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-bg-video',
    templateUrl: './bg-video.component.html',
    styleUrls: ['./bg-video.component.scss'],
    imports: [FeatherIconComponent]
})
export class BgVideoComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPassword() {
    this.show = !this.show;
  }

}

import { Component, OnInit } from '@angular/core';
import { TimeLineRightComponent } from '../time-line/time-line-right/time-line-right.component';
import { AboutCenterComponent } from './about-center/about-center.component';
import { TimeLineLeftComponent } from '../time-line/time-line-left/time-line-left.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [TimeLineLeftComponent, AboutCenterComponent, TimeLineRightComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TimeLineRightComponent } from './time-line-right/time-line-right.component';
import { TimeLineCenterComponent } from './time-line-center/time-line-center.component';
import { TimeLineLeftComponent } from './time-line-left/time-line-left.component';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss'],
    imports: [TimeLineLeftComponent, TimeLineCenterComponent, TimeLineRightComponent]
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

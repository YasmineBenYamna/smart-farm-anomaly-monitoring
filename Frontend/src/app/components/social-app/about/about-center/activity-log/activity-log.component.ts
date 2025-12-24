import { Component, OnInit } from '@angular/core';
import { log } from '../../../../../shared/data/social-app/social-app'

@Component({
    selector: 'app-activity-log',
    templateUrl: './activity-log.component.html',
    styleUrls: ['./activity-log.component.scss'],
    imports: []
})
export class ActivityLogComponent implements OnInit {
  public todays: any[] = []

  constructor() {       
    this.todays = log.todayData  
   }

  ngOnInit(): void {
  }

}

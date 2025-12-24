import { Component, OnInit } from '@angular/core';
import * as activity from '../../../../../shared/data/social-app/social-app'

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-activity-feed',
    templateUrl: './activity-feed.component.html',
    styleUrls: ['./activity-feed.component.scss'],
    imports: [NgbCollapse,]
})
export class ActivityFeedComponent implements OnInit {
  
  public isCollapsed = false;
  public activityFeed = activity.activityFeed
  constructor() { }

  ngOnInit(): void {
  }

}

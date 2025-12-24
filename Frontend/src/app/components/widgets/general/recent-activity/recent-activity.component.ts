import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-recent-activity',
    templateUrl: './recent-activity.component.html',
    styleUrls: ['./recent-activity.component.scss'],
    imports: [FeatherIconComponent]
})
export class RecentActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

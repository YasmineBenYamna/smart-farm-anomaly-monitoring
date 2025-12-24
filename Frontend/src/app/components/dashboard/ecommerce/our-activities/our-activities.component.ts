import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-our-activities',
    templateUrl: './our-activities.component.html',
    styleUrls: ['./our-activities.component.scss'],
    imports: [FeatherIconComponent]
})
export class OurActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

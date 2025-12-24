import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/components/dashboard/default'

import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
@Component({
    selector: 'app-ongoing-project',
    templateUrl: './ongoing-project.component.html',
    styleUrls: ['./ongoing-project.component.scss'],
    imports: [FeatherIconComponent,]
})
export class OngoingProjectComponent implements OnInit {

  public projectData = data.projectData
 
  constructor() { }

  ngOnInit(): void {
  }

}

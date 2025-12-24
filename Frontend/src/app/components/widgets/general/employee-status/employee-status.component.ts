import { Component, OnInit } from '@angular/core';
import * as generalData from '../../../../shared/data/components/widgest/general/general'
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee-status',
    templateUrl: './employee-status.component.html',
    styleUrls: ['./employee-status.component.scss'],
    imports: [FeatherIconComponent, CommonModule]
})
export class EmployeeStatusComponent implements OnInit {

  public employeeStatusData = generalData.employeeStatusData 
  constructor() { }

  ngOnInit(): void {
  }

}

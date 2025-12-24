import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.scss'],
    imports: [BreadcrumbComponent, FormsModule]
})
export class TimepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

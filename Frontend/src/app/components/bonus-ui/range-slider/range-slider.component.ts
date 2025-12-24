import { Component, OnInit } from '@angular/core';
import { Options, NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss'],
    imports: [BreadcrumbComponent, FormsModule, NgxSliderModule]
})
export class RangeSliderComponent implements OnInit {
  value: number = 100;
  value2: number = 100;
  value3: number = 1000;
  options2Value: number = 5;
  maxvalue: number = 70; 
  

  options: Options = {
    floor: 0,
    ceil: 200
  };

  options2: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: 'Jan'},
      {value: 3, legend: 'Feb'},
      {value: 4, legend: 'Mar'},
      {value: 5, legend: 'Apr'},
      {value: 2, legend: 'May'},
      {value: 6, legend: 'Jun'},
      {value: 7, legend: 'July'},
      {value: 8, legend: 'Aug'},
      {value: 9, legend: 'Sept'},
      {value: 10, legend: 'Oct'},
      {value: 11, legend: 'Nov'},
      {value: 12, legend: 'Dec'},
    ]
  };

  options3: Options = {
    floor: 1000,
    ceil: 10000,
    showTicksValues: true,
    tickStep: 3000,
    tickValueStep: 100
  };

  options4: Options = {
    floor: 0,
    ceil: 200,
    disabled: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}

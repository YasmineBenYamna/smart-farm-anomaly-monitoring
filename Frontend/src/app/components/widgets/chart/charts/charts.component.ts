import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    imports: [NgApexchartsModule]
})
export class ChartsComponent implements OnInit {

  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}

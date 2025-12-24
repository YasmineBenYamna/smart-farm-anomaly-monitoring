import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
@Component({
    selector: 'app-skill-status',
    templateUrl: './skill-status.component.html',
    styleUrls: ['./skill-status.component.scss'],
    imports: [NgApexchartsModule]
})
export class SkillStatusComponent implements OnInit {

  public skillChart = chartData.skillChart

  constructor() { }

  ngOnInit(): void {
  }

}

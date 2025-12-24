import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/components/widgest/charts/charts'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-browser-uses',
    templateUrl: './browser-uses.component.html',
    styleUrls: ['./browser-uses.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})
export class BrowserUsesComponent implements OnInit {

  public browserCandleStick = chartData.browserCandleStick
  constructor() { }

  ngOnInit(): void {
  }

}

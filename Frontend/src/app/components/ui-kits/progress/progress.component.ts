import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/progress'
import { BarsAnimatedComponent } from './bars-animated/bars-animated.component';
import { MultipleBarsComponent } from './multiple-bars/multiple-bars.component';
import { BarsStripedComponent } from './bars-striped/bars-striped.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
    imports: [BreadcrumbComponent, ProgressBarsComponent,
        BarsStripedComponent, MultipleBarsComponent, BarsAnimatedComponent]
})

export class ProgressComponent implements OnInit {

  public largeProgressBars = data.largeProgressBars

  constructor() { }

  ngOnInit(): void {
  }

}

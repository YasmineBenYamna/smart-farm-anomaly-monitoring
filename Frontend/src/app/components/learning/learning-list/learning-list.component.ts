import { Component, OnInit } from '@angular/core';
import * as learningData from '../../../shared/data/learning/learning'
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';
import { RouterLink } from '@angular/router';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-learning-list',
    templateUrl: './learning-list.component.html',
    styleUrls: ['./learning-list.component.scss'],
    imports: [BreadcrumbComponent, RouterLink, LearningFilterComponent]
})
export class LearningListComponent implements OnInit {
  public learning = learningData.learning
  public learningTop = learningData.learningTop
  constructor() { }

  ngOnInit(): void {
  }

}

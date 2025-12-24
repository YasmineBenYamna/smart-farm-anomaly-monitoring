import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import * as jobs from '../../../shared/data/jon-search/job-serach';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { JobApplyComponent } from './job-apply/job-apply.component';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.scss'],
    imports: [BreadcrumbComponent, JobFilterComponent, JobApplyComponent, RouterLink, NgbRating]
})
export class JobDetailsComponent implements OnInit {

  public jobCard = jobs.jobCards
  public jobCards: any [] = []
  
  constructor(public config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
    this.jobCards = this.jobCard.slice(0,4)
   }

  ngOnInit(): void {
  }

}

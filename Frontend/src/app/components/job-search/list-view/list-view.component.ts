import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import * as jobs from '../../../shared/data/jon-search/job-serach'
import { RouterLink } from '@angular/router';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss'],
    imports: [BreadcrumbComponent, JobFilterComponent, RouterLink, NgbRating]
})
export class ListViewComponent implements OnInit {

  public jobCard = jobs.jobCards
  jobCards : any [] = []
  constructor( public config: NgbRatingConfig ) {
    config.max = 5;
    config.readonly = true;
    
    this.jobCards = this.jobCard.slice(0,8)
   }


  ngOnInit(): void {
  }

}

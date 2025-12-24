import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../shared/data/jon-search/job-serach'
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-job-filter',
    templateUrl: './job-filter.component.html',
    styleUrls: ['./job-filter.component.scss'],
    imports: [NgbCollapse]
})
export class JobFilterComponent implements OnInit {

  OpenFilter: boolean = false
  public filter = filterData.filter
  public filterChackBox = filterData.filterChackBox
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;

  constructor() { 
 
    
  }

  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
  ngOnInit(): void {
  }

}

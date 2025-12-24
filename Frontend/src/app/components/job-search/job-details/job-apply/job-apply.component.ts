import { Component, OnInit } from '@angular/core';
import * as jobs from '../../../../shared/data/jon-search/job-serach'
import { jobDetail } from '../../../../shared/data/jon-search/job-serach'


@Component({
    selector: 'app-job-apply',
    templateUrl: './job-apply.component.html',
    styleUrls: ['./job-apply.component.scss'],
    imports: []
})
export class JobApplyComponent implements OnInit {
  qualifications = jobDetail.qualifications
  description = jobDetail.description
  agencyExperience = jobDetail.agencyExperience
  perks = jobDetail.perks

  constructor() { }

  ngOnInit(): void {
  }

}

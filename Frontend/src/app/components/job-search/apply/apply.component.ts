import { Component, OnInit } from '@angular/core';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrls: ['./apply.component.scss'],
    imports: [BreadcrumbComponent, JobFilterComponent, PersonalDetailsComponent, EducationComponent, ExperienceComponent, UploadFilesComponent]
})
export class ApplyComponent implements OnInit {
  
  constructor() { 
  
  }
  
  ngOnInit(): void {
  }

}

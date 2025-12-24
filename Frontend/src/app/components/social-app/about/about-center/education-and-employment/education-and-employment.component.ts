import { Component, OnInit } from '@angular/core';
import * as education from '../../../../../shared/data/social-app/social-app'


@Component({
    selector: 'app-education-and-employment',
    templateUrl: './education-and-employment.component.html',
    styleUrls: ['./education-and-employment.component.scss'],
    imports: []
})
export class EducationAndEmploymentComponent implements OnInit {

  // data
  public educationData = education.educationData
  constructor() { }

  ngOnInit(): void {
  }

}

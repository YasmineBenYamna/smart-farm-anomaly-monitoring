import { Component, OnInit } from '@angular/core';
import * as hobbiesData from '../../../../../shared/data/social-app/social-app'

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    imports: []
})
export class HobbiesComponent implements OnInit {

  // data
  public HobbiesData = hobbiesData.HobbiesData
  constructor() { }

  ngOnInit(): void {
  }

}

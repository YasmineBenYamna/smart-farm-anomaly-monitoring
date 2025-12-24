import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-error-page2',
    templateUrl: './error-page2.component.html',
    styleUrls: ['./error-page2.component.scss'],
    imports: [AngularSvgIconModule]
})
export class ErrorPage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

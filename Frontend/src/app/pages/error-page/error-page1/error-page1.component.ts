import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-error-page1',
    templateUrl: './error-page1.component.html',
    styleUrls: ['./error-page1.component.scss'],
    imports: [AngularSvgIconModule]
})
export class ErrorPage1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-footer-light',
    templateUrl: './footer-light.component.html',
    styleUrls: ['./footer-light.component.scss'],
    imports: [BreadcrumbComponent]
})
export class FooterLightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

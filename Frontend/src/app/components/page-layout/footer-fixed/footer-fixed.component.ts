import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-footer-fixed',
    templateUrl: './footer-fixed.component.html',
    styleUrls: ['./footer-fixed.component.scss'],
    imports: [BreadcrumbComponent]
})
export class FooterFixedComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  

}

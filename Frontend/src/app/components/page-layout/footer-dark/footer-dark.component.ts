import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-footer-dark',
    templateUrl: './footer-dark.component.html',
    styleUrls: ['./footer-dark.component.scss'],
    imports: [BreadcrumbComponent]
})
export class FooterDarkComponent implements OnInit {

  public url$: string
  constructor( private router: Router) { 
    this.url$ = window.location.href
 
    
  }

  

  ngOnInit(): void {
  }

}

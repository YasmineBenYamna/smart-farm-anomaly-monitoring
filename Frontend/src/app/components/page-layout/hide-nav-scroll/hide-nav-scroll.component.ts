import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-hide-nav-scroll',
    templateUrl: './hide-nav-scroll.component.html',
    styleUrls: ['./hide-nav-scroll.component.scss'],
    imports: [BreadcrumbComponent]
})
export class HideNavScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

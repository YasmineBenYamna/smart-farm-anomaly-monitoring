import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-helpers-classes',
    templateUrl: './helpers-classes.component.html',
    styleUrls: ['./helpers-classes.component.scss'],
    imports: [BreadcrumbComponent]
})

export class HelpersClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

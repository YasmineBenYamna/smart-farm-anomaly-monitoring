import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-tag-and-pills',
    templateUrl: './tag-and-pills.component.html',
    styleUrls: ['./tag-and-pills.component.scss'],
    imports: [BreadcrumbComponent]
})
export class TagAndPillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

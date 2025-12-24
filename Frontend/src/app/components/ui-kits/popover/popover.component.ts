import { Component, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
    imports: [BreadcrumbComponent, NgbPopover]
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

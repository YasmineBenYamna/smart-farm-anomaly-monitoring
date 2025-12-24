import { Component, OnInit } from '@angular/core';
import { MailFilterComponent } from '../mail-filter/mail-filter.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-read-mail',
    templateUrl: './read-mail.component.html',
    styleUrls: ['./read-mail.component.scss'],
    imports: [BreadcrumbComponent, MailFilterComponent]
})
export class ReadMailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

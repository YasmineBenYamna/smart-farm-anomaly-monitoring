import { Component, OnInit } from '@angular/core';
import * as email from '../../../shared/data/email/email'
import { RouterLink } from '@angular/router';

import { MailFilterComponent } from '../mail-filter/mail-filter.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-email-app',
    templateUrl: './email-app.component.html',
    styleUrls: ['./email-app.component.scss'],
    imports: [BreadcrumbComponent, MailFilterComponent, RouterLink]
})
export class EmailAppComponent implements OnInit {
  show = false
  
  // data
  public emailData = email.emailData
  
  constructor() { }
  
  // manu show
  openMenu(){
    this.show = !this.show
  }

  ngOnInit(): void {
  }



}

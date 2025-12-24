import { Component, OnInit } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    imports: [BreadcrumbComponent, ContactsFilterComponent, PersonalComponent]
})

export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 

}

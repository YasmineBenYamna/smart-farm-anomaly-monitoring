import { Component, OnInit } from '@angular/core';
import { NgxPrintDirective } from 'ngx-print';
import { FormsModule } from '@angular/forms';
import { InvoiceDataTableComponent } from './invoice-data-table/invoice-data-table.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    imports: [BreadcrumbComponent, InvoiceDataTableComponent, FormsModule, NgxPrintDirective]
})
export class InvoiceComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
}

import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import * as data from '../../shared/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, NgbdSortableHeader2 as NgbdSortableHeader2_1, SortEvent } from '../../shared/directive/sor-table.directive';
import { SupportTicketService } from '../../shared/services/support-ticket/support-ticket.service';
import { TicketComponent } from './ticket/ticket.component';

@Component({
    selector: 'app-support-ticket',
    templateUrl: './support-ticket.component.html',
    styleUrls: ['./support-ticket.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [DecimalPipe, SupportTicketService],
    imports: [BreadcrumbComponent, TicketComponent, FormsModule, NgbdSortableHeader2_1,
        CommonModule, NgbPagination, AsyncPipe]
})
export class SupportTicketComponent {
  countries$: Observable<data.supportDB[]>;
  total$: Observable<number>;

  public ticketListStatus = data.ticketListStatus 

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteTicket(id: number){
    this.countries$.subscribe((data: any)=> {      
      data.map((elem: any,i: any)=>{elem.id == id && data.splice(i,1)})
      
    })
  }
}


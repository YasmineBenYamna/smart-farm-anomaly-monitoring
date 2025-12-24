import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/support-ticket/support-ticket'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss'],
    imports: [CommonModule]
})
export class TicketComponent implements OnInit {

  public ticketListStatus = data.ticketListStatus 

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-pagination-color',
    templateUrl: './pagination-color.component.html',
    styleUrls: ['./pagination-color.component.scss'],
    imports: []
})
export class PaginationColorComponent implements OnInit {
  pagination = ["primary", "secondary", "success", "info", "warning", "danger" ]

  constructor() { }

  ngOnInit(): void {
  }

}

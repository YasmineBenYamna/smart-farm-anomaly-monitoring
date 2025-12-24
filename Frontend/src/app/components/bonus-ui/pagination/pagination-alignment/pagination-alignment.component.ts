import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-pagination-alignment',
    templateUrl: './pagination-alignment.component.html',
    styleUrls: ['./pagination-alignment.component.scss'],
    imports: []
})
export class PaginationAlignmentComponent implements OnInit {
  paginationSide= ["start", "center", "end"]

  constructor() { }

  ngOnInit(): void {
  }

}

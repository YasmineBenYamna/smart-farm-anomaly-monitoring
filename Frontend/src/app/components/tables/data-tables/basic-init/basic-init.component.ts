import { AsyncPipe, DecimalPipe,  } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { NgbdSortableHeader, NgbdSortableHeader as NgbdSortableHeader_1, SortEvent } from '../../../../shared/directive/sortable.directive';
import { TablesService } from '../../../../shared/services/tables/tables.service';
import { Table } from '../../../../shared/interface/table';

@Component({
    selector: 'app-basic-init',
    templateUrl: './basic-init.component.html',
    styleUrls: ['./basic-init.component.scss'],
    providers: [TablesService, DecimalPipe],
    imports: [BreadcrumbComponent, FormsModule, NgbdSortableHeader_1, NgbHighlight, NgbPagination, AsyncPipe]
})
export class BasicInitComponent{
  basicTable$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  
  constructor(public service: TablesService) {
    this.basicTable$ = service.basicTable$;
    this.total$ = service.total$;
  }
  

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteData(id: number){
    this.basicTable$.subscribe((data: any)=> {      
      data.map((elem: any,i: any)=>{elem.id == id && data.splice(i,1)})
      
    })
  }

}

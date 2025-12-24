import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import * as data from '../../../shared/data/e-commerce/product-list';
import { ProductListDirective, SortEvent } from '../../../shared/directive/product-list.directive';
import { productList } from '../../../shared/interface/product';
import { ProductListService } from '../../../shared/services/product/product-list.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    imports: [BreadcrumbComponent, FormsModule, CommonModule, NgbPagination, AsyncPipe],
    providers: [DecimalPipe, ProductListService]
})

export class ProductListComponent {
  products$: Observable<productList[]>;
  total$: Observable<number>;

  public PRODUCTLIST = data.PRODUCTLIST 

  @ViewChildren(ProductListDirective) headers: QueryList<ProductListDirective>;

  constructor(public service: ProductListService) {
    this.products$ = service.orderList$;
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
}

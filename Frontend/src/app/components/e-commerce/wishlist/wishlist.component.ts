import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { Products } from '../../../shared/model/product.model';
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    imports: [BreadcrumbComponent, NgbRating, CommonModule]
})
export class WishlistComponent implements OnInit {
  listData: Products[] = []

  constructor(public ProductService: ProductService, public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  // whishlist data
  ngOnInit(): void {
    this.ProductService.products().subscribe((data) => {
      this.listData = data;
    })
  }

}

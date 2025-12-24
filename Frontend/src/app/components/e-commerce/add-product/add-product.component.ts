import { Component, OnInit } from '@angular/core';
import { SizeImageComponent } from './size-image/size-image.component';
import { DescriptionCategoryComponent } from './description-category/description-category.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
    imports: [BreadcrumbComponent, DescriptionCategoryComponent, SizeImageComponent]
})
export class AddProductComponent implements OnInit {
 
  constructor() { }
    
  ngOnInit(): void {
  }

}

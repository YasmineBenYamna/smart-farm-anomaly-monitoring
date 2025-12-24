import { Component, OnInit } from '@angular/core';
import { Image, GalleryModule } from '@ks89/angular-modal-gallery';
import { DescriptionTabComponent } from './description-tab/description-tab.component';
import { BrandComponent } from './brand/brand.component';
import { DetailsComponent } from './details/details.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';


@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss'],
    imports: [BreadcrumbComponent, GalleryModule, DetailsComponent, BrandComponent, DescriptionTabComponent]
})
export class ProductPageComponent implements OnInit {

  imagesRect: Image[] = [
    new Image(0, { img: 'assets/images/ecommerce/01.jpg' }, { img: 'assets/images/ecommerce/01.jpg' }),
    new Image(1, { img: 'assets/images/ecommerce/04.jpg' }, { img: 'assets/images/ecommerce/04.jpg' }),
    new Image(2, { img: 'assets/images/ecommerce/03.jpg' }, { img: 'assets/images/ecommerce/03.jpg' }),
    new Image(3, { img: 'assets/images/ecommerce/05.jpg' }, { img: 'assets/images/ecommerce/05.jpg' }),]
  constructor() { }


  ngOnInit(): void {
  }

}

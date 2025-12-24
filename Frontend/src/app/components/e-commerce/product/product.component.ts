import { Component, OnInit } from '@angular/core';
import { ProductBoxComponent } from './product-box/product-box.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ProductBoxFilterService } from '../../../shared/services/product/product-box-filter.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    imports: [BreadcrumbComponent, FeatherIconComponent, FormsModule, FilterComponent, ProductBoxComponent]
})
export class ProductComponent implements OnInit {
  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: Boolean =  false;

  constructor( private ProductBoxFilterService:ProductBoxFilterService) { }

    gridOpens(){
      this.listView = false
      this.ProductBoxFilterService.gridOpen()
    }
    listOpens(){
      this.listView = true
      this.ProductBoxFilterService.listOpen()
    }
    grid2s(){
      this.listView = false
      this.ProductBoxFilterService.grid2()

    }
    grid3s(){
      this.listView = false
      this.ProductBoxFilterService.grid3()
    }
    grid6s(){
      this.listView = false
      this.ProductBoxFilterService.grid6()
    }
 

  ngOnInit(): void {
  }
  sidebarToggle(){
    this.openSidebar = !this.openSidebar    
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }

}

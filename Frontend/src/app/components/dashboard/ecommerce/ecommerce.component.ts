import { Component, OnInit } from '@angular/core';
import { TotalSaleComponent } from './total-sale/total-sale.component';
import { SupportComponent } from './support/support.component';
import { ProductDiscountComponent } from './product-discount/product-discount.component';
import { RevenueByCategoryComponent } from './revenue-by-category/revenue-by-category.component';
import { OurActivitiesComponent } from './our-activities/our-activities.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { HotSellingProductsComponent } from './hot-selling-products/hot-selling-products.component';
import { InvoiceOverviewComponent } from './invoice-overview/invoice-overview.component';
import { SalesStatsComponent } from './sales-stats/sales-stats.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-ecommerce',
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss'],
    imports: [
        BreadcrumbComponent,
        SalesStatsComponent,
        InvoiceOverviewComponent,
        HotSellingProductsComponent,
        RecentOrdersComponent,
        OurActivitiesComponent,
        RevenueByCategoryComponent,
        ProductDiscountComponent,
        SupportComponent,
        TotalSaleComponent,
    ]
})
export class EcommerceComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
}

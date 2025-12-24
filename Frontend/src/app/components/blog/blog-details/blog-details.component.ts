import { Component, OnInit } from '@angular/core';
import * as blog from '../../../shared/data/blog/blog'
import { RouterLink } from '@angular/router';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    imports: [BreadcrumbComponent, RouterLink]
})
export class BlogDetailsComponent implements OnInit {


  public BlogData = blog.BlogData
  public BlogSid = blog.BlogData
  public blog: any = []
  constructor() {
    // blog show 2 data
    this.blog = this.BlogSid.slice(0,2)
   }

  ngOnInit(): void {
  }

}

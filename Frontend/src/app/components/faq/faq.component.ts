import { Component, OnInit } from '@angular/core';
import * as faq from '../../shared/data/faq/faq';
import { LatestArticlesAndVideosComponent } from './latest-articles-and-videos/latest-articles-and-videos.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { SellingAndBuyingComponent } from './selling-and-buying/selling-and-buying.component';
import { IntellectualPropertyComponent } from './intellectual-property/intellectual-property.component';
import { QuickQueAndAnsComponent } from './quick-que-and-ans/quick-que-and-ans.component';
import { FaqTopPartComponent } from './faq-top-part/faq-top-part.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    imports: [BreadcrumbComponent, FaqTopPartComponent, QuickQueAndAnsComponent,
        IntellectualPropertyComponent, SellingAndBuyingComponent,
        UserAccountsComponent, SearchComponent, NavigationComponent,
        LatestUpdatesComponent, FeaturedTutorialsComponent,
        LatestArticlesAndVideosComponent]
})
export class FaqComponent implements OnInit {

  public faqData = faq.faqData

  constructor() { }

  ngOnInit(): void {
  }

}

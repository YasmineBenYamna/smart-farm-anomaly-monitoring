import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { MaximizeComponent } from './maximize/maximize.component';
import { NotificationComponent } from './notification/notification.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CartComponent } from './cart/cart.component';
import { SearchCustomizeComponent } from './search-customize/search-customize.component';
import { ModeComponent } from './mode/mode.component';
import { SearchComponent } from './search/search.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { NavService } from '../../../services/nav.service';
import { LayoutService } from '../../../services/layout/layout.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, AngularSvgIconModule, SearchComponent, ModeComponent,
        SearchCustomizeComponent, CartComponent, BookmarkComponent,
        NotificationComponent, MaximizeComponent, AccountComponent]
})

export class HeaderComponent implements OnInit {

  collapseSidebar: boolean = true;
    constructor(private navServices: NavService, public layout: LayoutService) {
  }

  sidebarToggle( ) {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  searchToggle(){
    this.navServices.search = true;
  }

  ngOnInit(): void {
  }
  
}

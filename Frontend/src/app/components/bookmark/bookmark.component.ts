import { Component, OnInit, ViewChild } from '@angular/core';
import { AddBookmarkComponent } from './model/add-bookmark/add-bookmark.component';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';
import { BookmarkProfileComponent } from './bookmark-profile/bookmark-profile.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-bookmark',
    templateUrl: './bookmark.component.html',
    styleUrls: ['./bookmark.component.scss'],
    imports: [BreadcrumbComponent, BookmarkProfileComponent, CreateBookmarksComponent]
})
export class BookmarkComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

}

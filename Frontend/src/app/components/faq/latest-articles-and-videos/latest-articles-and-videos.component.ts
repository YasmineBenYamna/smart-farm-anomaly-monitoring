import { Component, OnInit } from '@angular/core';
import * as latest from '../../../shared/data/faq/faq'
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-latest-articles-and-videos',
    templateUrl: './latest-articles-and-videos.component.html',
    styleUrls: ['./latest-articles-and-videos.component.scss'],
    imports: [FeatherIconComponent]
})
export class LatestArticlesAndVideosComponent implements OnInit {

  public articlesAndVideos = latest.articlesAndVideos
  constructor() { }

  ngOnInit(): void {
  }

}

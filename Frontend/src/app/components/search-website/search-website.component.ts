import { Component, OnInit } from '@angular/core';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { AllComponent } from './all/all.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-search-website',
    templateUrl: './search-website.component.html',
    styleUrls: ['./search-website.component.scss'],
    imports: [BreadcrumbComponent, CommonModule, AllComponent, ImagesComponent, VideosComponent]
})
export class SearchWebsiteComponent {

  public openTab : string = "All";

  constructor() { }

  public tabbed(val: string) {
  	this.openTab = val
  }
  

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-hover-effects',
    templateUrl: './hover-effects.component.html',
    styleUrls: ['./hover-effects.component.scss'],
    imports: [BreadcrumbComponent, LightboxModule]
})
export class HoverEffectsComponent {

  items: GalleryItem[];

  imageData = data;

 
  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  public hover =  [
    {
      hoverDigits: "1",
      hoverClass: "hover-1"
    },
    {
      hoverDigits: "2",
      hoverClass: "hover-2"
    },
    {
      hoverDigits: "3",
      hoverClass: "hover-3"
    },
    {
      hoverDigits: "4",
      hoverClass: "hover-4"
    },
    {
      hoverDigits: "5",
      hoverClass: "hover-5"
    },
    {
      hoverDigits: "6",
      hoverClass: "hover-6"
    },
    {
      hoverDigits: "7",
      hoverClass: "hover-7"
    },
    {
      hoverDigits: "8",
      hoverClass: "hover-8"
    },
    {
      hoverDigits: "9",
      hoverClass: "hover-9"
    },
    {
      hoverDigits: "10",
      hoverClass: "hover-10"
    },
    {
      hoverDigits: "11",
      hoverClass: "hover-11"
    },
    {
      hoverDigits: "12",
      hoverClass: "hover-12"
    },

    {
      hoverDigits: "13",
      hoverClass: "hover-13"
    },
    {
      hoverDigits: "14",
      hoverClass: "hover-14"
    },
    {
      hoverDigits: "15",
      hoverClass: "hover-15"
    },
  ]
  ngOnInit() {

    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

}


const data = [
  {
    srcUrl: 'assets/images/lightgallry/08.jpg',
    previewUrl: 'assets/images/lightgallry/08.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/010.jpg',
    previewUrl: 'assets/images/lightgallry/010.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/011.jpg',
    previewUrl: 'assets/images/lightgallry/011.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/010.jpg',
    previewUrl: 'assets/images/lightgallry/010.jpg'
  }
]

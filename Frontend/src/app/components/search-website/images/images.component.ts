import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import * as images from '../../../shared/data/search-website/images'

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [LightboxModule,]
})
export class ImagesComponent implements OnInit {
  items: GalleryItem[];

  public imageData = images.data

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }
}




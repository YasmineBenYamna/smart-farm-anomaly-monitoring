
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-map-js',
    templateUrl: './map-js.component.html',
    styleUrls: ['./map-js.component.scss'],
    imports: [BreadcrumbComponent, GoogleMapsModule]
})

export class MapJsComponent implements OnInit {

  public markers: any[] | any;
  public zoom: number;

  constructor() {
    this.markers = [];
    this.zoom = 2;
  }

  ngOnInit() {
    this.markers?.push({
      position: {
        lat: 35.717,
        lng: 139.731,
      },
      label: {
        color: 'black',
        text: 'Madrid',
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
    });

    this.markers?.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233,
      },
      label: {
        color: 'black',
        text: 'Paris',
      },
    });
  }

  //Street View
  @ViewChild(GoogleMap) map!: GoogleMap;

  ngAfterViewInit() {
    const streetView = this.map?.getStreetView();
    streetView?.setOptions({
      position: { lat: 38.9938386, lng: -77.2515373 },
      pov: { heading: 70, pitch: -10 },
    });
    streetView?.setVisible(true);
  }

}

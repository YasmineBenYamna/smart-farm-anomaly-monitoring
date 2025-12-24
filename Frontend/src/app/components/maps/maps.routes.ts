import { Routes } from '@angular/router';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { MapJsComponent } from './map-js/map-js.component';

var routingAnimation = localStorage.getItem('animate')

export default [
  {
    path: 'map-js',
    component: MapJsComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'leaflet-map',
    component: LeafletMapComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;

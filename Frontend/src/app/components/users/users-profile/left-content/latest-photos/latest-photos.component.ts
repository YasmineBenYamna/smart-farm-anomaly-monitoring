import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-latest-photos',
    templateUrl: './latest-photos.component.html',
    styleUrls: ['./latest-photos.component.scss'],
    imports: [NgbCollapse]
})
export class LatestPhotosComponent implements OnInit {
  public isProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

}

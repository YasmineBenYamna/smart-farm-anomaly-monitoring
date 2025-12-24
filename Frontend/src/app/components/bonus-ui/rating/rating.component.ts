
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BarRatingModule } from 'ngx-bar-rating';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
    imports: [BreadcrumbComponent, BarRatingModule, FaIconComponent,]
})

export class RatingComponent implements OnInit {
  squareRate = 3;
  squareRate2 = 2;
  cssRate = 2.6;
  faRate = 4;
  movieRate = 0;
  verticalRate = 5;
  fontAwesomeRate = 3.5;
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoRate = 5.6;
  faoRated = false;

  onFaoRate(e: any) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

  constructor(library: FaIconLibrary) { 
    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

  ngOnInit(): void {
  }


}

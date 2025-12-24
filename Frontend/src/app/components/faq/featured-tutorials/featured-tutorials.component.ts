import { Component, OnInit,Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import * as Tutorials from '../../../shared/data/faq/faq'

@Component({
    selector: 'app-featured-tutorials',
    templateUrl: './featured-tutorials.component.html',
    styleUrls: ['./featured-tutorials.component.scss'],
    imports: [NgbRating]
})
export class FeaturedTutorialsComponent implements OnInit {

  @Input() data: any;
  constructor(public config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
    
  }

  ngOnInit(): void {
  }

}

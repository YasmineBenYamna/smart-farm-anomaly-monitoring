import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/search-website/all'
@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss'],
    imports: []
})
export class AllComponent implements OnInit {

  fillRatingArray: []  = []
  unFillRatingArray: []  = []
  public all = data.all
  public s: any

 showRating: Boolean
  
  constructor() { 
    this.all.filter((data)=> {
       this.s = data.rating
    })
  }

  ngOnInit(): void {
   
  }

}

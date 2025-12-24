import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss'],
    imports: [],
})
export class SinglePostComponent implements OnInit {

  @Input() data: any

  constructor() {
    
   }

  ngOnInit(): void {
  }

}

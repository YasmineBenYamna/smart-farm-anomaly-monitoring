import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.scss'],
    imports: [],
})
export class SocialMediaComponent implements OnInit {

  @Input() data:any
  
  constructor() { }

  ngOnInit(): void {
  }

}

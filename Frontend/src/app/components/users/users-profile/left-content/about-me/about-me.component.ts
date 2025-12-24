import { Component, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    imports: [NgbCollapse]
})
export class AboutMeComponent implements OnInit {
  
  public isProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

}

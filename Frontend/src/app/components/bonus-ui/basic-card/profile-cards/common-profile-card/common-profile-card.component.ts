import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-common-profile-card',
    templateUrl: './common-profile-card.component.html',
    styleUrls: ['./common-profile-card.component.scss'],
    imports: []
})
export class CommonProfileCardComponent implements OnInit {

  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}

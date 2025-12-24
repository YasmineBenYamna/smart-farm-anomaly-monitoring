import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-color-alerts',
    templateUrl: './color-alerts.component.html',
    styleUrls: ['./color-alerts.component.scss'],
    imports: []
})
export class ColorAlertsComponent implements OnInit {

  @Input() alert:any
  constructor() { }

  ngOnInit(): void {
  }

}

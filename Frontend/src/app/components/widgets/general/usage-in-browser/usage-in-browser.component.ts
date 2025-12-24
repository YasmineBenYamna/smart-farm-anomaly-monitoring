import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-usage-in-browser',
    templateUrl: './usage-in-browser.component.html',
    styleUrls: ['./usage-in-browser.component.scss'],
    imports: [FeatherIconComponent]
})
export class UsageInBrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

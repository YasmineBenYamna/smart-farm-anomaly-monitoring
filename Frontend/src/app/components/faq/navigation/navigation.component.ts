import { Component, OnInit } from '@angular/core';
import * as navig from '../../../shared/data/faq/faq'
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    imports: [FeatherIconComponent,]
})
export class NavigationComponent implements OnInit {

  public navigation = navig.navigation
  constructor() { }

  ngOnInit(): void {
  }

}

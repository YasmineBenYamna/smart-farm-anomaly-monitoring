import { Component, OnInit } from '@angular/core';
import { MaterialStyleRightTabComponent } from './material-style-right-tab/material-style-right-tab.component';
import { MaterialStyleLeftTabComponent } from './material-style-left-tab/material-style-left-tab.component';
import { ColorTabsComponent } from './color-tabs/color-tabs.component';
import { StyleRightTabComponent } from './style-right-tab/style-right-tab.component';
import { StyleLeftTabComponent } from './style-left-tab/style-left-tab.component';
import { SimpleStyleBottomTabComponent } from './simple-style-bottom-tab/simple-style-bottom-tab.component';
import { SimpleMaterialStyleComponent } from './simple-material-style/simple-material-style.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-line-tabs',
    templateUrl: './line-tabs.component.html',
    styleUrls: ['./line-tabs.component.scss'],
    imports: [BreadcrumbComponent, SimpleMaterialStyleComponent, SimpleStyleBottomTabComponent,
        StyleLeftTabComponent, StyleRightTabComponent, ColorTabsComponent,
        MaterialStyleLeftTabComponent, MaterialStyleRightTabComponent]
})
export class LineTabsComponent implements OnInit {

  Primary = "primary"
  Secondary = "secondary"
  constructor() { }

  ngOnInit(): void {
  }

}

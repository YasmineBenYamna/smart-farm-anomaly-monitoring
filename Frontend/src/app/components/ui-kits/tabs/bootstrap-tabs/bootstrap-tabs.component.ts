import { Component, OnInit } from '@angular/core';
import { PrimaryColorComponent } from './primary-color/primary-color.component';
import { PillDarkColorComponent } from './pill-dark-color/pill-dark-color.component';
import { PillTabsWithIconComponent } from './pill-tabs-with-icon/pill-tabs-with-icon.component';
import { PillTabsComponent } from './pill-tabs/pill-tabs.component';
import { TabsVerticalComponent } from './tabs-vertical/tabs-vertical.component';
import { TabsRightAlignComponent } from './tabs-right-align/tabs-right-align.component';
import { TabsWithIconComponent } from './tabs-with-icon/tabs-with-icon.component';
import { TabsButtonLeftAlignComponent } from './tabs-button-left-align/tabs-button-left-align.component';
import { BasicTabsComponent } from './basic-tabs/basic-tabs.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-bootstrap-tabs',
    templateUrl: './bootstrap-tabs.component.html',
    styleUrls: ['./bootstrap-tabs.component.scss'],
    imports: [BreadcrumbComponent, BasicTabsComponent, TabsButtonLeftAlignComponent, TabsWithIconComponent, TabsRightAlignComponent, TabsVerticalComponent, PillTabsComponent, PillTabsWithIconComponent, PillDarkColorComponent, PrimaryColorComponent]
})
export class BootstrapTabsComponent implements OnInit {
  TopActive = 'top';
  HomeActive = 'home';
  HomeActive8 = 'home';

  Primary = "primary"
  Secondary = "secondary"
  Success = "success"
  Info = "info"
  Warning = "warning"
  Danger = "danger"
  constructor() { }

  ngOnInit(): void {
  }

}




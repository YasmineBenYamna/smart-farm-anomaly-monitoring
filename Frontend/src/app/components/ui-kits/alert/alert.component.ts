import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/ui-kits/alert'
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { TextAsActionComponent } from './text-as-action/text-as-action.component';
import { AlertIconInverseComponent } from './alert-icon-inverse/alert-icon-inverse.component';
import { AlertIconOutlineComponent } from './alert-icon-outline/alert-icon-outline.component';
import { OutlineDarkAlertsComponent } from './outline-dark-alerts/outline-dark-alerts.component';
import { OutlineAlertsComponent } from './outline-alerts/outline-alerts.component';
import { DismissingLightComponent } from './dismissing-light/dismissing-light.component';
import { LinkColorComponent } from './link-color/link-color.component';
import { DismissingComponent } from './dismissing/dismissing.component';
import { LinkThemeColorComponent } from './link-theme-color/link-theme-color.component';
import { AlertWithIconComponent } from './alert-with-icon/alert-with-icon.component';
import { ColorAlertsComponent } from './color-alerts/color-alerts.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    imports: [BreadcrumbComponent, ColorAlertsComponent, AlertWithIconComponent,
        LinkThemeColorComponent, DismissingComponent, LinkColorComponent,
        DismissingLightComponent, OutlineAlertsComponent, OutlineDarkAlertsComponent,
        AlertIconOutlineComponent, AlertIconInverseComponent, TextAsActionComponent, AdditionalContentComponent]
})
export class AlertComponent implements OnInit {

  public colorAlert = data.colorAlert
  public colorAlertLight = data.colorAlertLight
  
  constructor() { }

  ngOnInit(): void {
  }

}

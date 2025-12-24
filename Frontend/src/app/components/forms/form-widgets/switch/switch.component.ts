import { Component, OnInit } from '@angular/core';
import { SwitchWithColorComponent } from './switch-with-color/switch-with-color.component';
import { SwitchWithIconComponent } from './switch-with-icon/switch-with-icon.component';
import { SwitchSizingComponent } from './switch-sizing/switch-sizing.component';
import { SwitchUncheckedOutlineComponent } from './switch-unchecked-outline/switch-unchecked-outline.component';
import { SwitchOutlineComponent } from './switch-outline/switch-outline.component';
import { BasicColorComponent } from './basic-color/basic-color.component';
import { BasicSwitchComponent } from './basic-switch/basic-switch.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    imports: [BreadcrumbComponent, BasicSwitchComponent, BasicColorComponent, SwitchOutlineComponent, SwitchUncheckedOutlineComponent, SwitchSizingComponent, SwitchWithIconComponent, SwitchWithColorComponent]
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

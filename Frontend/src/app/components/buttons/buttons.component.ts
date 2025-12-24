import { Component, OnInit } from '@angular/core';
import { buttons } from '../../shared/data/button/button';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { TitleCasePipe } from '@angular/common';
@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
    imports: [BreadcrumbComponent, TitleCasePipe]
})
export class ButtonsComponent implements OnInit {

  btns = buttons.defaultButtons
  btns2 = buttons.defaultButtons2
  groupBtn = buttons.buttonsGroup
  constructor() {
    
  }

  ngOnInit(): void {
  }

}

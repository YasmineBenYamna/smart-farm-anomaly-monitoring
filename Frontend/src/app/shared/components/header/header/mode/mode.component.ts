import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutService } from '../../../../services/layout/layout.service';

@Component({
    selector: 'app-mode',
    templateUrl: './mode.component.html',
    styleUrls: ['./mode.component.scss'],
    imports: [AngularSvgIconModule]
})
export class ModeComponent implements OnInit {

  public dark: boolean = this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  constructor(public layout: LayoutService) { }

  ngOnInit(): void {
  }

  layoutToggle() {
    this.dark = !this.dark;
    this.dark ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only");
    this.layout.config.settings.layout_version = this.dark ? 'dark-only' : 'light';
  }

}

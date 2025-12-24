import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '../../../services/layout/layout.service';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss'],
    imports: [FormsModule, CommonModule]
})

export class ColorComponent implements OnInit {

  public MIXLayout: string = 'default';
  @HostBinding('@.disabled')
  public selectedValue: any
  public primary_color: string = '#6362E7';
  public secondary_color: string = '#FFC500';

  constructor(public layout:LayoutService) {}

  ngOnInit(): void {}

  applyColor() {
    document.documentElement.style.setProperty('--theme-deafult', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }

  customizeMixLayout(value: string) {
    this.MIXLayout = value;
    this.layout.config.settings.layout_version = value;
    document.body.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (value === "light-only") {
      document.body?.classList.add("light-only");
    } else if (value === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}

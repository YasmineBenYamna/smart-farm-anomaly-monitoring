import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-full-color-variant',
    templateUrl: './full-color-variant.component.html',
    styleUrls: ['./full-color-variant.component.scss'],
    imports: [FormsModule, TitleCasePipe]
})
export class FullColorVariantComponent implements OnInit {
  
  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]

  constructor() { }

  ngOnInit(): void {
  }

}

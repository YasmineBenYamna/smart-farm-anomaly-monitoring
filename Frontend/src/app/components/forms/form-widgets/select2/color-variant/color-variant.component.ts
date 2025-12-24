import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-color-variant',
    templateUrl: './color-variant.component.html',
    styleUrls: ['./color-variant.component.scss'],
    imports: [FormsModule, TitleCasePipe]
})
export class ColorVariantComponent implements OnInit {

  colors = ["primary", "secondary", "success", "info", "warning", "danger", "inverse"]
  constructor() { }

  ngOnInit(): void {
  }

}

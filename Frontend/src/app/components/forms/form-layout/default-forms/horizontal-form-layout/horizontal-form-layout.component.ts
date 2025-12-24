import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-horizontal-form-layout',
    templateUrl: './horizontal-form-layout.component.html',
    styleUrls: ['./horizontal-form-layout.component.scss'],
    imports: [FormsModule]
})
export class HorizontalFormLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

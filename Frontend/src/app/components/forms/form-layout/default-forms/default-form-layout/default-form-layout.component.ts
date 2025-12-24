import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-form-layout',
    templateUrl: './default-form-layout.component.html',
    styleUrls: ['./default-form-layout.component.scss'],
    imports: [FormsModule]
})
export class DefaultFormLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-custom-controls',
    templateUrl: './custom-controls.component.html',
    styleUrls: ['./custom-controls.component.scss'],
    imports: [FormsModule]
})
export class CustomControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

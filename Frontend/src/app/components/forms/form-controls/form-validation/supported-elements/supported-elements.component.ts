import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-supported-elements',
    templateUrl: './supported-elements.component.html',
    styleUrls: ['./supported-elements.component.scss'],
    imports: [FormsModule]
})
export class SupportedElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-sizing',
    templateUrl: './input-sizing.component.html',
    styleUrls: ['./input-sizing.component.scss'],
    imports: [FormsModule]
})
export class InputSizingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

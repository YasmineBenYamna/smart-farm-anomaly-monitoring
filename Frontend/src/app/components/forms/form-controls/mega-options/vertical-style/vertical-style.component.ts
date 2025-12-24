import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-vertical-style',
    templateUrl: './vertical-style.component.html',
    styleUrls: ['./vertical-style.component.scss'],
    imports: [FormsModule]
})
export class VerticalStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

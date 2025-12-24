import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-html-input-control',
    templateUrl: './basic-html-input-control.component.html',
    styleUrls: ['./basic-html-input-control.component.scss'],
    imports: [FormsModule]
})
export class BasicHtmlInputControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

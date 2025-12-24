import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-inline-style',
    templateUrl: './inline-style.component.html',
    styleUrls: ['./inline-style.component.scss'],
    imports: [FormsModule]
})
export class InlineStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

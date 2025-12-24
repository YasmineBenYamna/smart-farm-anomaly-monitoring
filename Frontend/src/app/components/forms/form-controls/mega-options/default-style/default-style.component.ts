import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-style',
    templateUrl: './default-style.component.html',
    styleUrls: ['./default-style.component.scss'],
    imports: [FormsModule]
})
export class DefaultStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

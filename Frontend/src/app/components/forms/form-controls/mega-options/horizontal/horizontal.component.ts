import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-horizontal',
    templateUrl: './horizontal.component.html',
    styleUrls: ['./horizontal.component.scss'],
    imports: [FormsModule]
})
export class HorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

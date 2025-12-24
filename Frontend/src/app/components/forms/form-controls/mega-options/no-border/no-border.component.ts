import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-no-border',
    templateUrl: './no-border.component.html',
    styleUrls: ['./no-border.component.scss'],
    imports: [FormsModule]
})
export class NoBorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

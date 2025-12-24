import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tooltips',
    templateUrl: './tooltips.component.html',
    styleUrls: ['./tooltips.component.scss'],
    imports: [],,
    imports: [FormsModule]
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

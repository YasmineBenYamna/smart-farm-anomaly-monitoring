import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mega-form',
    templateUrl: './mega-form.component.html',
    styleUrls: ['./mega-form.component.scss'],
    imports: [FormsModule]
})
export class MegaFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

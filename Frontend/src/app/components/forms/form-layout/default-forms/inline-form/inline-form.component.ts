import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-inline-form',
    templateUrl: './inline-form.component.html',
    styleUrls: ['./inline-form.component.scss'],
    imports: [FormsModule]
})
export class InlineFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

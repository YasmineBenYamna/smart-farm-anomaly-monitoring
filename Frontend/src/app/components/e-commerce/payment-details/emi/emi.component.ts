import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-emi',
    templateUrl: './emi.component.html',
    styleUrls: ['./emi.component.scss'],
    imports: [FormsModule]
})
export class EmiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

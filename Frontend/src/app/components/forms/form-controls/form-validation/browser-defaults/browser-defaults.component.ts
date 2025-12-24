import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-browser-defaults',
    templateUrl: './browser-defaults.component.html',
    styleUrls: ['./browser-defaults.component.scss'],
    imports: [FormsModule]
})
export class BrowserDefaultsComponent implements OnInit {
  public validate = false;
  public tooltipValidation = false;
  constructor() { }

  ngOnInit(): void {
  }
  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}

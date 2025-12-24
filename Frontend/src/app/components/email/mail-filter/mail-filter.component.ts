import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mail-filter',
    templateUrl: './mail-filter.component.html',
    styleUrls: ['./mail-filter.component.scss'],
    imports: [RouterLink]
})
export class MailFilterComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit(): void {
  }
  // manu open
  openMenu(){
    this.open = !this.open
  }

}

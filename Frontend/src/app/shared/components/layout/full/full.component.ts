import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-full',
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss'],
    imports: [RouterOutlet]
})
export class FullComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

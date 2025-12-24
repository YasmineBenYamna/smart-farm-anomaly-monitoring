import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bars',
    templateUrl: './progress-bars.component.html',
    styleUrls: ['./progress-bars.component.scss'],
    imports: [CommonModule]
})

export class ProgressBarsComponent implements OnInit {

  @Input() bars: any
  constructor() { }

  ngOnInit(): void {
  }

}

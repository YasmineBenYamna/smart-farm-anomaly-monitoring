import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-laval-comp',
    templateUrl: './laval-comp.component.html',
    styleUrls: ['./laval-comp.component.scss'],
    imports: [AngularSvgIconModule, CommonModule]
})
export class LavalCompComponent implements OnInit {

  @Input() data: any

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

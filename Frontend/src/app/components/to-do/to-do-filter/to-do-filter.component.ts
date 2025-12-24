import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-to-do-filter',
    templateUrl: './to-do-filter.component.html',
    styleUrls: ['./to-do-filter.component.scss'],
    imports: [FeatherIconComponent]
})
export class ToDoFilterComponent implements OnInit {
  public open = false;

  constructor() { }

  openMenu(){
    this.open = !this.open
  }
  ngOnInit(): void {
  }

}

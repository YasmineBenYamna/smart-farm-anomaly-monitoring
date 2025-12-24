import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-input-groups',
    templateUrl: './basic-input-groups.component.html',
    styleUrls: ['./basic-input-groups.component.scss'],
    imports: [FormsModule]
})
export class BasicInputGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

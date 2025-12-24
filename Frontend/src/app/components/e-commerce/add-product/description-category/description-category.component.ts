import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-description-category',
    templateUrl: './description-category.component.html',
    styleUrls: ['./description-category.component.scss'],
    imports: [FormsModule]
})
export class DescriptionCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-spinners',
    templateUrl: './spinners.component.html',
    styleUrls: ['./spinners.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class SpinnersComponent implements OnInit {

  Loader:any= []
  constructor() {
    for(let i = 0; i < 35;i++){
      this.Loader.push(i+1)
    }

   }

  ngOnInit(): void {
  }

}

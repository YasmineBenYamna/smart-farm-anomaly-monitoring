import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-whether-icon',
    templateUrl: './whether-icon.component.html',
    styleUrls: ['./whether-icon.component.scss'],
    imports: [BreadcrumbComponent]
})
export class WhetherIconComponent implements OnInit {
  
  constructor( ) { 
    
   }

  ngOnInit(): void {
  }
}

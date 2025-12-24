import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-kolkov-editors',
    templateUrl: './kolkov-editors.component.html',
    styleUrls: ['./kolkov-editors.component.scss'],
    imports: [BreadcrumbComponent, AngularEditorModule, FormsModule]
})

export class KolkovEditorsComponent implements OnInit {

  public htmlContent = '';

  constructor() { }
  
  ngOnInit(): void {
  }

}

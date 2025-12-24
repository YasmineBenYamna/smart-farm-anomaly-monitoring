import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-ngx-editors',
    templateUrl: './ngx-editors.component.html',
    styleUrls: ['./ngx-editors.component.scss'],
    imports: [BreadcrumbComponent, NgxEditorModule, FormsModule]
})

export class NgxditorsComponent implements OnInit {

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}

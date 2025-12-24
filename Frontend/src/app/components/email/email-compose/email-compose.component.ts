import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MailFilterComponent } from '../mail-filter/mail-filter.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-email-compose',
    templateUrl: './email-compose.component.html',
    styleUrls: ['./email-compose.component.scss'],
    imports: [BreadcrumbComponent, MailFilterComponent, FormsModule, NgxEditorModule, DropzoneModule]
})

export class EmailComposeComponent implements OnInit {
  
  public editor: Editor;
  public html = '';
  public text = '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public config: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    addRemoveLinks:true,
    acceptedFiles: 'image/*'
  };

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

}

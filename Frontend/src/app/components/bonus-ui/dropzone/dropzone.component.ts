
import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-dropzone',
    templateUrl: './dropzone.component.html',
    styleUrls: ['./dropzone.component.scss'],
    imports: [BreadcrumbComponent, DropzoneModule]
})

export class DropzoneComponent implements OnInit {

  public imageConfig: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    clickable: true,
    uploadMultiple:false,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    maxFiles: 1
  };

  public imageConfig1: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    uploadMultiple: true,
    addRemoveLinks: true,
  };

  public imageConfig2: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text = '<i class="icon-cloud-up"></i><h4>Drop files here or click to upload.</h4><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>'

  ngOnInit(): void {
  }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  onUploadError1(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess1(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  onUploadError2(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess2(args: any): void {
    console.log("onUploadSuccess:", args);
  }

}

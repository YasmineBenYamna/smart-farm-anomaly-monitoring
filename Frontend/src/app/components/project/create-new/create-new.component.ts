import {  } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
    selector: "app-create-new",
    templateUrl: "./create-new.component.html",
    styleUrls: ["./create-new.component.scss"],
    imports: [
        BreadcrumbComponent,
        DropzoneModule
    ]
})

export class CreateNewComponent implements OnInit {

  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    clickable: true,
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text = '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  ngOnInit(): void { }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }
  
}


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-size-image',
    templateUrl: './size-image.component.html',
    styleUrls: ['./size-image.component.scss'],
    imports: [FormsModule, DropzoneModule,]
})

export class SizeImageComponent implements OnInit {

  public text = '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    clickable: true,
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  ngOnInit(): void {
  }

}

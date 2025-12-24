
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss'],
    imports: [BreadcrumbComponent, FormsModule, NgSelectModule, NgxEditorModule, DropzoneModule,]
})

export class AddPostComponent implements OnInit {

  public editor: Editor;
  public html = '';
  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];
  files: File[] = []
  public category = [{ id: 1, name: "Life Style" }, { id: 2, name: "Travel" }];
  public selectedCategory: string[] = [];

  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
  cities4: { id: number; name: string; }[];

  public text = '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span class="dz-message">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    addRemoveLinks:true
  };

  constructor() {
    this.create10kCities();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }

  addCustomUser = (term: any) => ({ id: term, name: term });
  private create10kCities() {
    this.cities4 = Array.from({ length: 10000 }, (value, key) => key)
      .map(val => ({
        id: val,
        name: `city ${val}`
      }));
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}

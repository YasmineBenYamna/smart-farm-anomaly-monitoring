import { Component, OnInit } from '@angular/core';
import * as fileData from '../../../shared/data/components/file-manager/file-manager'


@Component({
    selector: 'app-file-items',
    templateUrl: './file-items.component.html',
    styleUrls: ['./file-items.component.scss'],
    imports: []
})
export class FileItemsComponent implements OnInit {

  // data
  public Quickdata = fileData.Quickdata
  public FoldersData = fileData.FoldersData
  public FilesData = fileData.FilesData
  
  constructor() { }

  ngOnInit(): void {
  }
  active = 1;
}

import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-file-manager-sidebar',
    templateUrl: './file-manager-sidebar.component.html',
    styleUrls: ['./file-manager-sidebar.component.scss'],
    imports: [FeatherIconComponent]
})
export class FileManagerSidebarComponent implements OnInit {
  open = false;

  constructor() { }

  ngOnInit(): void {
  }
  // manu open
  openMenu(){
    this.open = !this.open
  }

}

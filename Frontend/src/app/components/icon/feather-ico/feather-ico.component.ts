import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconComponent } from '../../../shared/components/feather-icon/feather-icon.component';
import { allIcon } from '../../../shared/data/icon/thimify';

@Component({
    selector: 'app-feather-ico',
    templateUrl: './feather-ico.component.html',
    styleUrls: ['./feather-ico.component.scss'],
    imports: [BreadcrumbComponent, FeatherIconComponent,]
})
export class FeatherIcoComponent implements OnInit {
  public detail: boolean = false;
  public flag: string;
  public val: string;
  public icon: string;

  public allIconData = allIcon.feather
  
  constructor(public toastrService:ToastrService) { 
    
  }

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<app-feather-icon [icon]="'+ icon +'"></app-feather-icon>';
    
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<app-feather-icon [icon]="'+ val +'"></app-feather-icon>>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });

  }
  ngOnInit(): void {
    
  }

}

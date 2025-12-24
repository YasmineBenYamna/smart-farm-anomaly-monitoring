import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { allIcon } from '../../../shared/data/icon/thimify';
@Component({
    selector: 'app-fontawesome-icon',
    templateUrl: './fontawesome-icon.component.html',
    styleUrls: ['./fontawesome-icon.component.scss'],
    imports: [BreadcrumbComponent,]
})
export class FontawesomeIconComponent implements OnInit {
  public detail : boolean =false;
  public icon : string;
  public val : string;

  public allIconData = allIcon.fontawesome
  
  constructor( public toastrService:ToastrService) {     
  }
  toggleWithInfo(icon: string) {
    this.detail=true;
    this.icon=icon;
    this.val='<i class="fa fa-' + icon + '"></i>';
  }

  //Copy an icon code
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="fa fa-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml:true, positionClass:'toast-bottom-right'});
  }

  ngOnInit(): void {
  }

}

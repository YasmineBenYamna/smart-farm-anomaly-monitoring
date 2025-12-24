import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { slideInAnimation } from '../../data/animation/animation';
import { LayoutService } from '../../services/layout/layout.service';
import { ColorComponent } from './color/color.component';
import { LayoutSettingComponent } from './layout-setting/layout-setting.component';
@Component({
    selector: 'app-customizer',
    templateUrl: './customizer.component.html',
    styleUrls: ['./customizer.component.scss'],
    animations: [
        slideInAnimation
    ],
    imports: [CommonModule, ColorComponent, LayoutSettingComponent]
})

export class CustomizerComponent implements OnInit {
  public customizer: string = '';

  constructor(private modalService: NgbModal, public layout: LayoutService) {}

  openModal(popup: any) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  ngOnInit(): void {
  }

  Customizer(val: any) {
    this.customizer = val;
  }

  copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }
}

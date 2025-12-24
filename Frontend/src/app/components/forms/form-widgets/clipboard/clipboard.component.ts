import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-clipboard',
    templateUrl: './clipboard.component.html',
    styleUrls: ['./clipboard.component.scss'],
    imports: [BreadcrumbComponent, FormsModule]
})
export class ClipboardComponent implements OnInit {
  text1: string = '';
  text2: string = '';
  textModal: string = '';
  isCopied1: boolean = false;
  isCopied2: boolean = false;
  isCopied3: boolean = false;
  clipboardExample1: string = '';
  copyHighlightTxt: string = 'dolor sit amet';
  clipboardExample2: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has";
  basic = false;
  paragraphData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  copyText: any = ""
    constructor(private _clipboardService: ClipboardService) {
      
    }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
          alert('copy success!');
      }
    });
  }
  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCut(){
    
  }
  onCopyFailure() {
      alert('copy fail!');
  }
  copyFunction(txt:string){
    navigator.clipboard.writeText(txt);
  }
  cutFunction(id:any){
    switch (id) {
      case 'clipboardExample1':navigator.clipboard.writeText(this.clipboardExample1);this.clipboardExample1 = '';
        break;
      case 'clipboardExample2': navigator.clipboard.writeText(this.clipboardExample2);this.clipboardExample2 = '';
        break;
      default:
        break;
    }
  }
}

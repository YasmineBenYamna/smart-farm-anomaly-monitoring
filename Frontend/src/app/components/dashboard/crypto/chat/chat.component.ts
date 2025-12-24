import { Component, OnInit } from '@angular/core';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    imports: [FeatherIconComponent]
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

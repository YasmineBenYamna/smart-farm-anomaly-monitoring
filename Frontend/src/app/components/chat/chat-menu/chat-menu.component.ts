import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as chatData from '../../../shared/data/chat/chat';

@Component({
    selector: 'app-chat-menu',
    templateUrl: './chat-menu.component.html',
    styleUrls: ['./chat-menu.component.scss'],
    imports: [CommonModule]
})
export class ChatMenuComponent implements OnInit {
  public openTab : string = "call";

  // data
  public calls = chatData.ChatDB.call

  constructor() { }

  public tabbed(val: string) {
  	this.openTab = val
  }
  
  ngOnInit(): void {
  }

}

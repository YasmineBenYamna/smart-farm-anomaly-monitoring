import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { UsersChatsComponent } from '../chat-app/users-chats/users-chats.component';
import { ChatMenuComponent } from '../chat-menu/chat-menu.component';

@Component({
    selector: 'app-video-chat',
    templateUrl: './video-chat.component.html',
    styleUrls: ['./video-chat.component.scss'],
    imports: [BreadcrumbComponent, UsersChatsComponent, ChatMenuComponent]
})
export class VideoChatComponent implements OnInit {

  public openTab : string = "call";
  show = false;
  active = 1;
 
  constructor() {
  }

  ngOnInit(): void {
    
  }

  openMenu(){
    this.show = !this.show
  }

  public tabbed(val: string) {
  	this.openTab = val
  }

}

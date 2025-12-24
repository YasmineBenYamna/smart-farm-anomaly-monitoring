import { Component, OnInit } from '@angular/core';
import { ChatsComponent } from './chats/chats.component';
import { UsersChatsComponent } from './users-chats/users-chats.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
@Component({
    selector: 'app-chat-app',
    templateUrl: './chat-app.component.html',
    styleUrls: ['./chat-app.component.scss'],
    imports: [BreadcrumbComponent, UsersChatsComponent, ChatsComponent]
})
export class ChatAppComponent implements OnInit {
  public clickedEvent: any;
  constructor() { }

  ngOnInit(): void {
  }

  childEventClicked(user: Event) {
    this.clickedEvent = user;
  }
}

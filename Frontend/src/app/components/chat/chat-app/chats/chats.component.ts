import { Component, OnInit } from '@angular/core';
import { ChatMenuComponent } from '../../chat-menu/chat-menu.component';
import { ChatUsers } from '../../../../shared/model/chat.model';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
    imports: [ChatMenuComponent]
})
export class ChatsComponent implements OnInit {

  public openTab : string = "call";
  public searchUsers: ChatUsers[] = []
  public users: ChatUsers[] = []
  public chatUser: any;
  public chats: any;
  public id:any
  show = false;
  active = 1;
 
  constructor() {}

  ngOnInit(): void {  }

  // manu open
  openMenu(){
    this.show = !this.show
  }

}

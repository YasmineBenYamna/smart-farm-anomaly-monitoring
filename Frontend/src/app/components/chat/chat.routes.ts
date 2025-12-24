import { Routes } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { VideoChatComponent } from './video-chat/video-chat.component';

var routingAnimation = localStorage.getItem('animate')

export default[
  {
    path: 'chat-app',
    component: ChatAppComponent,
    data: { animation: [routingAnimation] }
  },
  {
    path: 'video-chat',
    component: VideoChatComponent,
    data: { animation: [routingAnimation] }
  }
] as Routes;

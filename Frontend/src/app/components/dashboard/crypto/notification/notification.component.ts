import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    imports: [FeatherIconComponent, NgApexchartsModule]
})

export class NotificationComponent implements OnInit {
  
  public notification = chartData.notification;
  chart: boolean = false;
  notificationData = [
    {
      name: 'Clifford Hale', activity: 'Sent you a message', massage: 'What`s the project report update?', date: '2 hours ago', chart: false
    },
    {
      name: 'Lottie Marsh', activity: 'Sent you a message', massage: 'Here is the project update check this', price: '+380.234', date: '10 jul 2022', chart: false
    },
    {
      name: 'BTC', activity: 'News', massage: 'Let me show you some example.', date: '22 jun 2022', p: '+39.69%', chart: true
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

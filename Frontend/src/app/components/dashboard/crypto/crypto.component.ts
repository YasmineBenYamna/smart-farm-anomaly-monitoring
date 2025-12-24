import { Component, Input, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget'
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CandlestickChartTotalComponent } from './candlestick-chart-total/candlestick-chart-total.component';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { TradingActivitiesComponent } from './trading-activities/trading-activities.component';
import { CoinComponent } from './coin/coin.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';


@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.scss'],
    imports: [BreadcrumbComponent, CoinComponent, TradingActivitiesComponent, NotificationComponent, ChatComponent, CandlestickChartTotalComponent, BuySellComponent]
})
export class CryptoComponent implements OnInit {
  
  
  public bitcoin = chartData.bitcoin;
  public ripple = chartData.ripple;
  public ethereum = chartData.ethereum;
  public litecoin = chartData.litecoin;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}

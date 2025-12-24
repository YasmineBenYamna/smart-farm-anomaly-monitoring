import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FeatherIconComponent } from '../../../../shared/components/feather-icon/feather-icon.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-trading-activities',
    templateUrl: './trading-activities.component.html',
    styleUrls: ['./trading-activities.component.scss'],
    imports: [FeatherIconComponent, CommonModule, AngularSvgIconModule]
})
export class TradingActivitiesComponent implements OnInit {
  tradingData = [
    {
      icon:'bitcoin', arrow: 'arrow-up', iconBg: 'primary',  name: 'Bitcoin', sub: 'BTC', coinPrice: '$9,594.72', coinPriceSub: '1,258.00 AKT', date: '11:30 AM - 16 May 2022', buySell: 'Buy'
    },
    {
      icon:'ripple', arrow: 'arrow-down', iconBg: 'secondary', name: 'Ripple', sub: 'XRP', coinPrice: '0.04382 XRP', coinPriceSub: '2,364.85 B20', date: '12:30 AM - 05 Apr 2022', buySell: 'Sell'
    },
    {
      icon:'ethereum', arrow: 'arrow-up', iconBg: 'info', name: 'Ethereum', sub: 'ETH', coinPrice: '$0.0445 ETH', coinPriceSub: '783.56 MIR', date: '10:30 AM - 20 Jun 2022', buySell: 'Buy'
    },
    {
      icon: 'litecoin', arrow: 'arrow-down', iconBg: 'warning', name: 'Litecoin', sub: 'BTC', coinPrice: '0.00255 BTC', coinPriceSub: '307.94 USF', date: '1:30 AM - 12 Apr 2022', buySell: 'Sell'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

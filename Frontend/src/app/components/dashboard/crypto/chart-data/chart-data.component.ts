import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chart-data',
    templateUrl: './chart-data.component.html',
    styleUrls: ['./chart-data.component.scss'],
    imports: [],
})
export class ChartDataComponent implements OnInit {

  Bitcoin = [
    {
      icon: '', title: 'Bitcoin', sub: '(BTC)', rate: '305.64', percentage: '7.6', arrow: 'arrow-up', tagColor: 'badge-light-primary', coin: 'bitcoin' 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

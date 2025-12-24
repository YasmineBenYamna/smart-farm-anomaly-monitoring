import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../../shared/data/charts/google-chart'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
    selector: 'app-combo-chart',
    templateUrl: './combo-chart.component.html',
    styleUrls: ['./combo-chart.component.scss'],
    imports: [Ng2GoogleChartsModule]
})
export class ComboChartComponent implements OnInit {

  public comboChart =  chartData.comboChart
  
  constructor() { }

  ngOnInit(): void {
  }

}

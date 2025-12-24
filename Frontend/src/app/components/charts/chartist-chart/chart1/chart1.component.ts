import { Component, OnInit } from "@angular/core";
import { Configuration, ChartistModule } from "ng-chartist";
import * as chartData from '../../../../shared/data/charts/chartist'

@Component({
    selector: "app-chart1",
    templateUrl: "./chart1.component.html",
    styleUrls: ["./chart1.component.scss"],
    imports: [ChartistModule]
})
export class Chart1Component implements OnInit {
  public configuration = chartData.configuration;

  constructor() {}

  ngOnInit(): void {}
}

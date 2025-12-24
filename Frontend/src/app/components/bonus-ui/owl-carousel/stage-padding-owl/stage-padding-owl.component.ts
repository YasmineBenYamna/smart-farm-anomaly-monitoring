import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-stage-padding-owl",
    templateUrl: "./stage-padding-owl.component.html",
    styleUrls: ["./stage-padding-owl.component.scss"],
    imports: [CarouselModule,]
})
export class StagePaddingOwlComponent implements OnInit {
  public owlcarousel8ptions = data?.owlcarousel8ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

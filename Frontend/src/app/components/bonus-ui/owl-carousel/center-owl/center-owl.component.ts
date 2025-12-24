import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-center-owl",
    templateUrl: "./center-owl.component.html",
    styleUrls: ["./center-owl.component.scss"],
    imports: [CarouselModule,]
})
export class CenterOwlComponent implements OnInit {
  public owlcarousel3ptions = data?.owlcarousel3ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

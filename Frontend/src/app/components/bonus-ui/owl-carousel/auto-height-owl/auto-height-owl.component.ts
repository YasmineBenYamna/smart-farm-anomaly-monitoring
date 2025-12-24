import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-auto-height-owl",
    templateUrl: "./auto-height-owl.component.html",
    styleUrls: ["./auto-height-owl.component.scss"],
    imports: [CarouselModule,]
})
export class AutoHeightOwlComponent implements OnInit {
  public owlcarousel14ptions = data?.owlcarousel14ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

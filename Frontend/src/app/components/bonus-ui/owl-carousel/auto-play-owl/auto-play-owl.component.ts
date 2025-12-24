import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-auto-play-owl",
    templateUrl: "./auto-play-owl.component.html",
    styleUrls: ["./auto-play-owl.component.scss"],
    imports: [CarouselModule,]
})
export class AutoPlayOwlComponent implements OnInit {
  public owlcarousel12ptions = data?.owlcarousel12ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

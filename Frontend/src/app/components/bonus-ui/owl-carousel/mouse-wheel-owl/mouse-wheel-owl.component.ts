import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-mouse-wheel-owl",
    templateUrl: "./mouse-wheel-owl.component.html",
    styleUrls: ["./mouse-wheel-owl.component.scss"],
    imports: [CarouselModule,]
})
export class MouseWheelOwlComponent implements OnInit {
  public owlcarousel13ptions = data?.owlcarousel13ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

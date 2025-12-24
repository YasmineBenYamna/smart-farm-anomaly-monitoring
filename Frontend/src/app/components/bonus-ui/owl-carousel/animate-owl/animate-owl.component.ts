import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-animate-owl",
    templateUrl: "./animate-owl.component.html",
    styleUrls: ["./animate-owl.component.scss"],
    imports: [CarouselModule,]
})
export class AnimateOwlComponent implements OnInit {
  public owlcarousel11ptions = data?.owlcarousel11ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

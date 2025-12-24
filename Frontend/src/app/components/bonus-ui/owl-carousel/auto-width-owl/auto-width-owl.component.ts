import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-auto-width-owl",
    templateUrl: "./auto-width-owl.component.html",
    styleUrls: ["./auto-width-owl.component.scss"],
    imports: [CarouselModule,]
})
export class AutoWidthOwlComponent implements OnInit {
  public owlcarousel5ptions = data?.owlcarousel5ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

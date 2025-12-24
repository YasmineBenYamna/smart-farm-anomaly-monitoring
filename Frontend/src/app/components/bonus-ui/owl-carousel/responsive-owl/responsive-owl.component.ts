import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-responsive-owl",
    templateUrl: "./responsive-owl.component.html",
    styleUrls: ["./responsive-owl.component.scss"],
    imports: [CarouselModule,]
})
export class ResponsiveOwlComponent implements OnInit {
  public owlcarousel1 = data?.owlcarousel1;
  public owlcarousel2ptions = data?.owlcarousel2ptions;
  constructor() {}

  ngOnInit(): void {}
}

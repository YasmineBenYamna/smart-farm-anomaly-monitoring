import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-events-owl",
    templateUrl: "./events-owl.component.html",
    styleUrls: ["./events-owl.component.scss"],
    imports: [CarouselModule,]
})
export class EventsOwlComponent implements OnInit {
  public owlcarousel7ptions = data?.owlcarousel7ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

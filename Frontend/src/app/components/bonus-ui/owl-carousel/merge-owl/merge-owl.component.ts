import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";

@Component({
    selector: "app-merge-owl",
    templateUrl: "./merge-owl.component.html",
    styleUrls: ["./merge-owl.component.scss"],
    imports: [CarouselModule,]
})
export class MergeOwlComponent implements OnInit {
  public owlcarousel4ptions = data?.owlcarousel4ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}

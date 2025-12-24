import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/components/dashboard/ecommerce";
import {  } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";
@Component({
    selector: "app-product-discount",
    templateUrl: "./product-discount.component.html",
    styleUrls: ["./product-discount.component.scss"],
    imports: [CarouselModule,]
})

export class ProductDiscountComponent implements OnInit {

  public seconds: number;
  public interval: any
  public discount = data.discount;
  public owlcarousel1Options = {
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0);  
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();
      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });
      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });
      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });
      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}

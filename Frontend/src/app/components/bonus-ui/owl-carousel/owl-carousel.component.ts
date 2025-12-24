import { Component, OnInit } from "@angular/core";
import { MouseWheelOwlComponent } from "./mouse-wheel-owl/mouse-wheel-owl.component";
import { AutoHeightOwlComponent } from "./auto-height-owl/auto-height-owl.component";
import { AutoPlayOwlComponent } from "./auto-play-owl/auto-play-owl.component";
import { AnimateOwlComponent } from "./animate-owl/animate-owl.component";
import { LazyLoadOwlComponent } from "./lazy-load-owl/lazy-load-owl.component";
import { RightToLeftOwlComponent } from "./right-to-left-owl/right-to-left-owl.component";
import { StagePaddingOwlComponent } from "./stage-padding-owl/stage-padding-owl.component";
import { EventsOwlComponent } from "./events-owl/events-owl.component";
import { NavigationsOwlComponent } from "./navigations-owl/navigations-owl.component";
import { AutoWidthOwlComponent } from "./auto-width-owl/auto-width-owl.component";
import { MergeOwlComponent } from "./merge-owl/merge-owl.component";
import { CenterOwlComponent } from "./center-owl/center-owl.component";
import { ResponsiveOwlComponent } from "./responsive-owl/responsive-owl.component";
import { BasicOwlComponent } from "./basic-owl/basic-owl.component";
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";
@Component({
    selector: "app-owl-carousel",
    templateUrl: "./owl-carousel.component.html",
    styleUrls: ["./owl-carousel.component.scss"],
    imports: [
        BreadcrumbComponent,
        BasicOwlComponent,
        ResponsiveOwlComponent,
        CenterOwlComponent,
        MergeOwlComponent,
        AutoWidthOwlComponent,
        NavigationsOwlComponent,
        EventsOwlComponent,
        StagePaddingOwlComponent,
        RightToLeftOwlComponent,
        LazyLoadOwlComponent,
        AnimateOwlComponent,
        AutoPlayOwlComponent,
        AutoHeightOwlComponent,
        MouseWheelOwlComponent,
    ]
})
export class OwlCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

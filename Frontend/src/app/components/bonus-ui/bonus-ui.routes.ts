import { Routes } from "@angular/router";
import { BasicCardComponent } from "./basic-card/basic-card.component";
import { BreadcrumbUiComponent } from "./breadcrumb-ui/breadcrumb-ui.component";
import { DropzoneComponent } from "./dropzone/dropzone.component";
import { ImageCropComponent } from "./image-cropper/image-cropper.component";
import { OwlCarouselComponent } from "./owl-carousel/owl-carousel.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { RangeSliderComponent } from "./range-slider/range-slider.component";
import { RatingComponent } from "./rating/rating.component";
import { RibbonsComponent } from "./ribbons/ribbons.component";
import { StepsComponent } from "./steps/steps.component";
import { StickyComponent } from "./sticky/sticky.component";
import { SweetAlert2Component } from "./sweet-alert2/sweet-alert2.component";
import { Timeline1Component } from "./timeline1/timeline1.component";
import { TourComponent } from "./tour/tour.component";

var routingAnimation = localStorage.getItem("animate");

export default [
  {
    path: "rating",
    component: RatingComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "dropzone",
    component: DropzoneComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "tour",
    component: TourComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "sweetAlert2",
    component: SweetAlert2Component,
    data: { animation: [routingAnimation] },
  },
  {
    path: "owl-carousel",
    component: OwlCarouselComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "ribbons",
    component: RibbonsComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "pagination",
    component: PaginationComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "breadcrumb",
    component: BreadcrumbUiComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "steps",
    component: StepsComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "range-slider",
    component: RangeSliderComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "image-cropper",
    component: ImageCropComponent,
    data: { animation: [routingAnimation] },
  },

  {
    path: "sticky",
    component: StickyComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "basic-card",
    component: BasicCardComponent,
    data: { animation: [routingAnimation] },
  },
  {
    path: "timeline1",
    component: Timeline1Component,
    data: { animation: [routingAnimation] },
  },
] as Routes;

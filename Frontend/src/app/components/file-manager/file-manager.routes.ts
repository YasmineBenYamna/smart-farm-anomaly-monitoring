import { Routes } from "@angular/router";
import { FileManagerComponent } from "./file-manager.component";

var routingAnimation = localStorage.getItem("animate");

export default[
  {
    path: "",
    component: FileManagerComponent,
    data: { animation: [routingAnimation] },
  },
] as Routes;


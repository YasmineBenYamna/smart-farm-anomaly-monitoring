import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
    selector: "app-toaster",
    templateUrl: "./toaster.component.html",
    styleUrls: ["./toaster.component.scss"],
    imports: [BreadcrumbComponent]
})

export class ToasterComponent implements OnInit {
  
  constructor(private toastr: ToastrService) {}
  showSuccess() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error("everything is broken", "Major Error", {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info("everything is broken", "Major Error", {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning("everything is broken", "Major Error", {
      timeOut: 3000,
    });
  }

  toastTopRight() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-top-right",
    });
  }

  toastBottomRight() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-right",
    });
  }

  toastBottomLeft() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-bottom-left",
    });
  }

  toastTopLeft() {
    this.toastr.success("everything is broken", "Major Error", {
      timeOut: 3000,
      closeButton: true,
      positionClass: "toast-top-left",
    });
  }

  ngOnInit(): void {}
}

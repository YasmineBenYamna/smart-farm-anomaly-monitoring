import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";

@Component({
    selector: "app-account",
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.scss"],
    imports: [AngularSvgIconModule]
})
export class AccountComponent implements OnInit {
  public userName: string;
  public profileImg: "assets/images/dashboard/profile.jpg";

  constructor(public router: Router) {}

  logoutFunc() {
    localStorage.clear();
    localStorage.removeItem("user");
    this.router.navigate(["/auth/login"]);
  }
  ngOnInit(): void {}
}

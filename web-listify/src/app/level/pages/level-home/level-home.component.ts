import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SharedServicesService } from "src/app/shared/services/shared-services.service";

@Component({
  selector: "app-level-home",
  templateUrl: "./level-home.component.html",
  styleUrls: ["./level-home.component.css"],
})
export class LevelHomeComponent implements OnInit {
  constructor(
    public displayDialogs: DisplayDialogs,
    private router: Router,
    private sharedServices: SharedServicesService
  ) {}

  ngOnInit(): void {
    if (!this.sharedServices.isAdmin()) {
      this.router.navigate(["/forbidden"]);
    }
  }
}

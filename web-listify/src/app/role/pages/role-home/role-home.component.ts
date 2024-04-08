import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminSideMenuComponent } from "src/app/shared/components/admin-side-menu/admin-side-menu.component";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SharedServicesService } from "src/app/shared/services/shared-services.service";

@Component({
  selector: "app-role-home",
  templateUrl: "./role-home.component.html",
  styleUrls: ["./role-home.component.css"],
  providers: [AdminSideMenuComponent],
})
export class RoleHomeComponent implements OnInit {
  constructor(public displayDialogs: DisplayDialogs, private router: Router, private sharedServices: SharedServicesService) {}

  ngOnInit(): void {
    if (!this.sharedServices.isAdmin()) {
      this.router.navigate(["/forbidden"]);
    }
  }
}

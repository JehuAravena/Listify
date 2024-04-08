import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SharedServicesService } from "src/app/shared/services/shared-services.service";

@Component({
  selector: "app-permission-role-home",
  templateUrl: "./permission-role-home.component.html",
  styleUrls: ["./permission-role-home.component.css"],
})
export class PermissionRoleHomeComponent implements OnInit {
  constructor(
    public displayDialogs: DisplayDialogs,
    private router: Router,
    private sharedServices: SharedServicesService
  ) {}

  public permissionRole() {
    this.displayDialogs.openRolePermissionCreate();
  }

  ngOnInit(): void {
    if (!this.sharedServices.isAdmin()) {
      this.router.navigate(["/forbidden"]);
    }
  }
}

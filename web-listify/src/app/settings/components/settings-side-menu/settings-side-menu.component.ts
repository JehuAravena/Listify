import { Component } from "@angular/core";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SharedServicesService } from "src/app/shared/services/shared-services.service";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { UserService } from "src/app/user/service/user.service";

@Component({
  selector: "app-settings-side-menu",
  templateUrl: "./settings-side-menu.component.html",
  styleUrls: ["./settings-side-menu.component.css"],
})
export class SettingsSideMenuComponent {
  selected?: string;

  constructor(
    private userService: UserService,
    private displayDialogs: DisplayDialogs,
    private snackbarService: SnackbarService,
    private sharedService: SharedServicesService
  ) {}

  isActive(button: string) {
    this.selected = button;
    console.log(this.selected);
  }

  deleteAccount() {
    console.log("delete account");
    let user = localStorage.getItem("user");
    let userid = JSON.parse(user as string)[0].US_ID_USER;
    localStorage.removeItem("user");
    try {
      this.userService.deleteUser(userid).subscribe((data) => {
        console.log(data);
      });
      this.snackbarService.successSnackbar("Account deleted");
      window.location.href = "/login";
    } catch (error) {
      this.snackbarService.failureSnackbar("Account not deleted: " + error);
    }
  }

  askConfirmation(): boolean {
    if (this.sharedService.isAdmin()) {
      this.snackbarService.failureSnackbar("Admin account cannot be deleted");
      return false;
    } else {
      return this.displayDialogs
        .userDeleteConfirmation()
        .afterClosed()
        .subscribe((result: any) => {
          if (result) {
            console.log("result: ", result);
            this.deleteAccount();
            return true;
          } else {
            console.log("result: ", result);
            this.snackbarService.failureSnackbar("Account not deleted");
            return false;
          }
        });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";

@Component({
  selector: "app-logout-test",
  templateUrl: "./logout-test.component.html",
  styleUrls: ["./logout-test.component.css"],
})
export class LogoutTestComponent implements OnInit {
  constructor(private displayDialogs: DisplayDialogs) {}

  ngOnInit(): void {
    const userExists = localStorage.getItem("user");
    if (userExists) {
      this.askConfirmation();
    } else {
      window.location.href = "/login";
    }
  }

  askConfirmation(): boolean {
    return this.displayDialogs
      .logOutConfirmation()
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          localStorage.clear();
          window.location.href = "/login";
        } else {
          window.location.href = "/task/list";
        }
      });
  }
}

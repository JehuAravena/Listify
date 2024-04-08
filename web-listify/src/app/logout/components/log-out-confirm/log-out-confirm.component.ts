import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-log-out-confirm",
  templateUrl: "./log-out-confirm.component.html",
  styleUrls: ["./log-out-confirm.component.css"],
})
export class LogOutConfirmComponent {
  constructor(private dialogRef: MatDialogRef<LogOutConfirmComponent>) {}
}

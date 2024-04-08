import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-pass-update-confirm",
  templateUrl: "./pass-update-confirm.component.html",
  styleUrls: ["./pass-update-confirm.component.css"],
})
export class PassUpdateConfirmComponent {
  constructor(private dialogRef: MatDialogRef<PassUpdateConfirmComponent>) {}
}

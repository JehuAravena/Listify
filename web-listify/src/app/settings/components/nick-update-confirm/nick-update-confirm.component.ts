import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-nick-update-confirm",
  templateUrl: "./nick-update-confirm.component.html",
  styleUrls: ["./nick-update-confirm.component.css"],
})
export class NickUpdateConfirmComponent {
  constructor(private dialogRef: MatDialogRef<NickUpdateConfirmComponent>) {}
}

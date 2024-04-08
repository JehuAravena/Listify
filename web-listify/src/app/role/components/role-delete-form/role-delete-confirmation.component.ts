import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-role-delete-confirmation",
  templateUrl: "./role-delete-confirmation.component.html",
  styleUrls: ["./role-delete-confirmation.component.css"],
})
export class RoleDeleteConfirmationComponent {
  constructor(
    private dialogRef: MatDialogRef<RoleDeleteConfirmationComponent>
  ) {}
}

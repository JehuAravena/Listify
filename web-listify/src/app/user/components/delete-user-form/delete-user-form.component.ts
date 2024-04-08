import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-delete-user-form",
  templateUrl: "./delete-user-form.component.html",
  styleUrls: ["./delete-user-form.component.css"],
})
export class DeleteUserFormComponent {
  constructor(private dialogRef: MatDialogRef<DeleteUserFormComponent>) {}
}

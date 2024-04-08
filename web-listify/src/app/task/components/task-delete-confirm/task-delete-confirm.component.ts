import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-task-delete-confirm",
  templateUrl: "./task-delete-confirm.component.html",
  styleUrls: ["./task-delete-confirm.component.css"],
})
export class TaskDeleteConfirmComponent {
  constructor(private dialogRef: MatDialogRef<TaskDeleteConfirmComponent>) {}
}

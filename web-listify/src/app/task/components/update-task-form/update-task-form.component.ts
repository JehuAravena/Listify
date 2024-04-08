import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { TaskService } from "../../service/task.service";
import { TaskUpdateRequest } from "../../interface/task-update-request.interface";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";

@Component({
  selector: "app-update-task-form",
  templateUrl: "./update-task-form.component.html",
  styleUrls: ["./update-task-form.component.css"],
})
export class UpdateTaskFormComponent {
  form: FormGroup = this.fb.group(
    {
      TITLE_IN: ["", [Validators.minLength(3), Validators.maxLength(50)]],
      DESCRIPTION_IN: ["", [Validators.maxLength(255)]],
      PRIORITY_IN: null,
    },
    { updateOn: "change" }
  );

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private taskService: TaskService,
    public displayDialogs: DisplayDialogs,
    public snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form.reset();
  }

  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isFieldMinLength(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  isFormEmpty(): boolean {
    const formValues = this.form.value;
    for (const key in formValues) {
      if (formValues[key]) {
        return false;
      }
    }
    return true;
  }

  public updateTask() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackbarService.failureSnackbar("Task update canceled");
    } else if (this.isFormEmpty()) {
      this.snackbarService.failureSnackbar(
        "Task not updated: no changes detected"
      );
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.failureSnackbar(
        "Invalid form, please check the required fields"
      );
    } else {
      let task: TaskUpdateRequest = this.form.value;
      task.ID_TASK_IN = this.data.idTask;
      console.log(task);
      this.taskService.updateTask(task).subscribe(
        (result) => {
          console.log("task updated...");
          this.snackbarService.successSnackbar("Task updated successfully");
          console.log(result);
        },
        (err) => {
          console.log(err);
          this.snackbarService.failureSnackbar("Task update failed");
        }
      );
      this.form.reset();
    }
  }
}

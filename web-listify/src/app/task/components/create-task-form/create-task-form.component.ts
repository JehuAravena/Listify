import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { TaskService } from "../../service/task.service";
import { TaskRequest } from "../../interface/task-request.interface";
import { idUserLogin } from "src/app/shared/values/shared-values";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";

@Component({
  selector: "app-create-task-form",
  templateUrl: "./create-task-form.component.html",
  styleUrls: ["./create-task-form.component.css"],
})
export class CreateTaskFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      TITLE_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      DESCRIPTION_IN: ["", [Validators.maxLength(255)]],
      PRIORITY_IN: [null, Validators.required],
    },
    { updateOn: "change" }
  );

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private taskService: TaskService,
    public displayDialogs: DisplayDialogs,
    public snackbarService: SnackbarService
  ) {}
  ngOnInit(): void {
    this.form.reset();
  }

  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isFieldRequired(errors, field);
    this.fieldValidators.isFieldMinLength(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  createTask() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackbarService.failureSnackbar("Task creation canceled");
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.failureSnackbar(
        "Invalid form, please check the required fields"
      );
    } else {
      let task: TaskRequest = this.form.value;
      task.ID_USER_IN = idUserLogin;
      console.log(task);
      this.taskService.createTask(task).subscribe(
        (result) => {
          console.log("task created...");
          this.snackbarService.successSnackbar("Task created successfully");
          console.log(result);
        },
        (err) => {
          console.log(err);
        }
      );
      this.form.reset();
    }
  }
}

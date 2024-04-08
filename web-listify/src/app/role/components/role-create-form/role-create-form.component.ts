import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { RoleService } from "../../service/role.service";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { RoleRequest } from "../../interface/roles-request.interface";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";

@Component({
  selector: "app-role-create-form",
  templateUrl: "./role-create-form.component.html",
  styleUrls: ["./role-create-form.component.css"],
})
export class RoleCreateFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      ROLE_NAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      ROLE_DESCRIPTION_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
    },
    { updateOn: "change" }
  );

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private roleService: RoleService,
    public displayDialogs: DisplayDialogs,
    private snackbarService: SnackbarService
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
  createRole() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackbarService.failureSnackbar("Role creation canceled");
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.failureSnackbar(
        "Invalid form, please check the required fields"
      );
    } else {
      let roles: RoleRequest = this.form.value;
      console.log(roles);
      this.roleService.createRole(roles).subscribe(
        (result) => {
          console.log("role created...");
          console.log(result);
          this.snackbarService.successSnackbar("Role created successfully");
        },
        (err) => {
          console.log(err);
          this.snackbarService.failureSnackbar(err.error.error.message);
        }
      );
      this.form.reset();
    }
  }
}

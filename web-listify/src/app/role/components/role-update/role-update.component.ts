import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { RoleService } from "../../service/role.service";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { rolesUpdateRequest } from "../../interface/roles-update-request.interface";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-role-update",
  templateUrl: "./role-update.component.html",
  styleUrls: ["./role-update.component.css"],
})
export class RoleUpdateComponent {
  form: FormGroup = this.fb.group(
    {
      ROLE_NAME_IN: ["", [Validators.minLength(3), Validators.maxLength(50)]],
      ROLE_DESCRIPTION_IN: [
        "",
        [Validators.minLength(3), Validators.maxLength(255)],
      ],
    },
    { updateOn: "change" }
  );

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private roleService: RoleService,
    public displayDialogs: DisplayDialogs,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form.reset();
    console.log(this.data);
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

  public updateRole() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackbarService.failureSnackbar("Not updated: Canceled");
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.failureSnackbar("Invalid form");
      console.log("Formulario invalido");
    } else if (this.isFormEmpty()) {
      this.snackbarService.failureSnackbar("Not updated: No changes detected");
    } else {
      let role: rolesUpdateRequest = this.form.value;
      let idRole = this.data.idRole;
      role.ID_ROLE_IN = idRole;
      console.log(role);
      console.log(role.ID_ROLE_IN);
      console.log("Formulario valido");
      this.roleService.updateRole(role).subscribe(
        (result) => {
          this.snackbarService.successSnackbar("Role updated");
          console.log("role updated...");
          console.log(result);
        },
        (err) => {
          this.snackbarService.failureSnackbar(err.error.error.message);
          console.log(err);
        }
      );
      this.form.reset();
    }
  }
}

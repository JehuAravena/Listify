import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { UserService } from "../../service/user.service";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { RoleInterface } from "../../interface/roles";
import {
  IS_EMAIL_VALID,
  IS_LETTERS_AND_SPACES_VALID,
  IS_NICKNAME_SYMBOLS_VALID,
} from "src/app/shared/validators/regular-expressions";
import { UserUpdateRequest } from "../../interface/user-update-request";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-user-update-form",
  templateUrl: "./user-update-form.component.html",
  styleUrls: ["./user-update-form.component.css"],
})
export class UserUpdateFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      NAME_IN: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID),
        ],
      ],
      NICKNAME_IN: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID),
        ],
      ],
      LASTNAME_IN: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID),
        ],
      ],
      EMAIL_IN: [
        "",
        [
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern(IS_EMAIL_VALID),
        ],
      ],
      PASSWORD_IN: ["", [Validators.minLength(8), Validators.maxLength(50)]],
      ID_ROLE_IN: [""],
    },
    { updateOn: "change" }
  );

  roles: RoleInterface[] = [];

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private userService: UserService,
    public displayDialogs: DisplayDialogs,
    private snackBarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form.reset();
    this.loadRoles();
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      (data: RoleInterface[]) => {
        this.roles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    if (field === "EMAIL_IN") {
      this.fieldValidators.isEmailValid(errors, field);
      this.fieldValidators.isFieldRequired(errors, field);
      this.fieldValidators.isFieldMinLength(errors, field);
      this.fieldValidators.isFieldMaxLength(errors, field);
    } else if (field === "NAME_IN" || field === "LASTNAME_IN") {
      this.fieldValidators.isLettersAndSpacesValid(errors, field);
      this.fieldValidators.isFieldRequired(errors, field);
      this.fieldValidators.isFieldMinLength(errors, field);
      this.fieldValidators.isFieldMaxLength(errors, field);
    } else {
      this.fieldValidators.isNicknameSymbolsValid(errors, field);
      this.fieldValidators.isFieldRequired(errors, field);
      this.fieldValidators.isFieldMinLength(errors, field);
      this.fieldValidators.isFieldMaxLength(errors, field);
    }
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

  updateUser() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackBarService.failureSnackbar("User update canceled");
    } else if (this.isFormEmpty()) {
      this.snackBarService.failureSnackbar(
        "User not updated: no changes detected"
      );
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBarService.failureSnackbar(
        "Invalid form, please check the required fields"
      );
    } else {
      let user: UserUpdateRequest = this.form.value;
      user.ID_USER_IN = this.data.idUser;
      console.log(user);
      this.userService.updateUser(user).subscribe(
        (result) => {
          console.log("user updated...");
          this.snackBarService.successSnackbar("User updated successfully");
          console.log(result);
        },
        (err) => {
          console.log(err);
          this.snackBarService.failureSnackbar(err.error.error.message);
        }
      );
      this.form.reset();
    }
  }
}

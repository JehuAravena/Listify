import { Component } from "@angular/core";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/user/service/user.service";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { UserUpdateRequest } from "src/app/user/interface/user-update-request";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";

@Component({
  selector: "app-change-pass-form",
  templateUrl: "./change-pass-form.component.html",
  styleUrls: ["./change-pass-form.component.css"],
})
export class ChangePassFormComponent {
  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private userService: UserService,
    private snackBarService: SnackbarService,
    private displayDialogs: DisplayDialogs
  ) {}

  form: FormGroup = this.fb.group(
    {
      OLD_PASSWORD_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      NEW_PASSWORD_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
      CONFIRM_PASSWORD_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    },
    { updateOn: "change" }
  );

  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isFieldRequired(errors, field);
    this.fieldValidators.isFieldMinLength(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  ngOnInit(): void {
    this.form.reset();
    this.getOldPassword();
  }

  getOldPassword() {
    const user = localStorage.getItem("user");
    const userPass = JSON.parse(user as string)[0].US_PASSWORD;
    return userPass;
  }

  onCancelButton() {
    this.snackBarService.failureSnackbar("Password not updated");
    this.form.reset();
  }

  checkPasswords() {
    const password = this.form.get("NEW_PASSWORD_IN")?.value;
    const confirmPassword = this.form.get("CONFIRM_PASSWORD_IN")?.value;
    const oldPassword = this.form.get("OLD_PASSWORD_IN")?.value;

    if (oldPassword !== this.getOldPassword()) {
      this.snackBarService.failureSnackbar("Wrong old password");
    } else if (password !== confirmPassword) {
      this.snackBarService.failureSnackbar("Passwords don't match");
    } else {
      this.askConfirmation();
    }
    this.form.markAllAsTouched();
  }

  updateUser() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBarService.failureSnackbar(
        "Password not updated: Check fields"
      );
    } else if (this.isFormEmpty()) {
      this.snackBarService.failureSnackbar("Password not updated");
      console.log("empty form");
    } else {
      const user: UserUpdateRequest = this.form.value;
      user.ID_USER_IN = JSON.parse(
        localStorage.getItem("user") as string
      )[0].US_ID_USER;
      user.NAME_IN = null;
      user.NICKNAME_IN = null;
      user.LASTNAME_IN = null;
      user.EMAIL_IN = null;
      user.PASSWORD_IN = this.form.get("NEW_PASSWORD_IN")?.value;
      user.ID_ROLE_IN = null;
      this.userService.updateUser(user).subscribe(
        (result) => {
          console.log("user updated...");
          console.log(result);
          this.snackBarService.successSnackbar("Password updated successfully");
          this.updatePassLocalStorage();
          console.log("local updated...");
          this.form.reset();
        },
        (err) => {
          console.log(err);
          this.snackBarService.failureSnackbar(
            "Password not updated: " + err.error.error.message
          );
        }
      );
    }
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

  askConfirmation(): boolean {
    return this.displayDialogs
      .passUpdateConfirmation()
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          console.log("result: ", result);
          this.updateUser();
          return true;
        } else {
          console.log("result: ", result);
          this.snackBarService.failureSnackbar("Password not updated");
          this.form.reset();
          return false;
        }
      });
  }

  updatePassLocalStorage() {
    const user = localStorage.getItem("user");
    const userID = JSON.parse(user as string)[0].US_ID_USER;
    this.userService.getSpecificUser(String(userID)).subscribe(
      (data: any) => {
        if (data.length > 0) {
          localStorage.setItem("user", JSON.stringify(data));
          console.log("user found");
          console.log(localStorage.getItem("user"));
        } else {
          console.log("no user found");
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

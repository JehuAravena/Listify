import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { IS_NICKNAME_SYMBOLS_VALID } from "src/app/shared/validators/regular-expressions";
import { UserUpdateRequest } from "src/app/user/interface/user-update-request";
import { UserService } from "src/app/user/service/user.service";

@Component({
  selector: "app-change-nick-form",
  templateUrl: "./change-nick-form.component.html",
  styleUrls: ["./change-nick-form.component.css"],
})
export class ChangeNickFormComponent {
  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private userService: UserService,
    private snackBarService: SnackbarService,
    private service: UserService,
    private displayDialogs: DisplayDialogs
  ) {}

  form: FormGroup = this.fb.group(
    {
      OLD_NICKNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID),
        ],
      ],
      NEW_NICKNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID),
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
    this.fieldValidators.isNicknameSymbolsValid(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  ngOnInit(): void {
    this.form.reset();
    this.getOldNick();
  }

  getOldNick() {
    const user = localStorage.getItem("user");
    const userNick = JSON.parse(user as string)[0].US_NICKNAME;
    console.log(userNick);
    return userNick;
  }

  onCancelButton() {
    this.snackBarService.failureSnackbar("Nick not updated");
    this.form.reset();
  }

  checkNick() {
    const oldNick = this.form.get("OLD_NICKNAME_IN")?.value;
    const user = localStorage.getItem("user");
    const userNick = JSON.parse(user as string)[0].US_NICKNAME;
    console.log(userNick);
    if (oldNick !== userNick) {
      this.snackBarService.failureSnackbar("Wrong old nick");
    } else {
      this.askConfirmation();
    }
    this.form.markAllAsTouched();
  }

  askConfirmation(): boolean {
    return this.displayDialogs
      .nickUpdateConfirmation()
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          console.log("result: ", result);
          this.updateNick();
          return true;
        } else {
          console.log("result: ", result);
          this.snackBarService.failureSnackbar("Nick not updated");
          this.form.reset();
          return false;
        }
      });
  }

  updateNick() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBarService.failureSnackbar("Nick not updated: Check fields");
      console.log("invalid form");
    } else if (this.isFormEmpty()) {
      this.snackBarService.failureSnackbar("Nick not updated");
      console.log("empty form");
    } else {
      const user: UserUpdateRequest = this.form.value;
      user.ID_USER_IN = JSON.parse(
        localStorage.getItem("user") as string
      )[0].US_ID_USER;
      user.NAME_IN = null;
      user.NICKNAME_IN = this.form.get("NEW_NICKNAME_IN")?.value;
      user.LASTNAME_IN = null;
      user.EMAIL_IN = null;
      user.PASSWORD_IN = null;
      user.ID_ROLE_IN = null;
      this.userService.updateUser(user).subscribe(
        (result) => {
          console.log("user updated...");
          console.log(result);
          this.snackBarService.successSnackbar("Nick updated successfully");
          this.updateNickLocalStorage();
          console.log("local updated...");
          this.form.reset();
        },
        (err) => {
          console.log(err);
          this.snackBarService.failureSnackbar(
            "Nick not updated: " + err.error.error.message
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

  updateNickLocalStorage() {
    const user = localStorage.getItem("user");
    const userID = JSON.parse(user as string)[0].US_ID_USER;
    this.service.getSpecificUser(userID).subscribe(
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

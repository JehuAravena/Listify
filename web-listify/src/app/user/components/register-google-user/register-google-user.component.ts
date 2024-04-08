import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { IS_NICKNAME_SYMBOLS_VALID } from "src/app/shared/validators/regular-expressions";
import { UserService } from "../../service/user.service";
import { UserRequest } from "../../interface/user-request";
import { LoginService } from "src/app/login/service/login.service";
import { LoginRequest } from "src/app/login/interface/login-request";

@Component({
  selector: "app-register-google-user",
  templateUrl: "./register-google-user.component.html",
  styleUrls: ["./register-google-user.component.css"],
})
export class RegisterGoogleUserComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      NICKNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID),
        ],
      ],
      PASSWORD_IN: [
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

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private snackbarService: SnackbarService,
    private userService: UserService,
    private loginService: LoginService
  ) {}

  gUser = JSON.parse(localStorage.getItem("gUser") || "{}");

  ngOnInit(): void {
    this.form.reset();
    console.log("usuario google", this.gUser.email);
  }

  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isNicknameSymbolsValid(errors, field);
    this.fieldValidators.isFieldRequired(errors, field);
    this.fieldValidators.isFieldMinLength(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  createGoogleUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      let user: UserRequest = this.form.value;
      user.EMAIL_IN = this.gUser.email;
      user.NAME_IN = this.gUser.firstName;
      user.LASTNAME_IN = this.gUser.lastName;
      user.ID_ROLE_IN = 2;
      console.log(user);
      this.userService.createUser(user).subscribe(
        (result) => {
          console.log("user created...");
          console.log(result);
          this.snackbarService.successSnackbar("User registered successfully.");
          this.loginService.getLogin(user.EMAIL_IN, user.PASSWORD_IN).subscribe(
            (data: LoginRequest) => {
              localStorage.setItem("user", JSON.stringify(data));
              window.location.href = "/task/list";
            },
            (error: any) => {
              console.log(error);
            }
          );
        },
        (err) => {
          console.log(err);
          this.snackbarService.failureSnackbar(
            "Error registering user: " + err.error.error.message + "."
          );
        }
      );
      this.form.reset();
    }
  }
}

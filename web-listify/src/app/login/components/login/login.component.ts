import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "../../service/login.service";
import { LoginRequest } from "../../interface/login-request";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { IS_EMAIL_VALID } from "src/app/shared/validators/regular-expressions";
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from "@abacritt/angularx-social-login";
import { UserService } from "src/app/user/service/user.service";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      EMAIL_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          Validators.pattern(IS_EMAIL_VALID),
        ],
      ],
      PASSWORD_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    },
    { updateOn: "change" }
  );

  user?: SocialUser;
  loggedIn?: boolean;
  private accessToken = "";

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private loginService: LoginService,
    private authService: SocialAuthService,
    private userService: UserService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      window.location.href = "/task/list";
    }else{
      localStorage.clear();
    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    this.form.reset();
    console.log("usuario google", this.user);
  }

  getAccessToken(): void {
    this.authService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => (this.accessToken = accessToken));
    console.log("usuario google", this.user);
  }

  checkIfUserExists(): void {
    this.getAccessToken();
    localStorage.setItem("gUser", JSON.stringify(this.user));
    this.userService.getUserByMail(String(this.user?.email)).subscribe(
      (data: any) => {
        console.log("data", data);
        if (data.length > 0) {
          localStorage.setItem("user", JSON.stringify(data));
          this.loginService.getLogin(data[0].US_EMAIL, data[0].US_PASSWORD).subscribe(
            (data: LoginRequest) => {
              window.location.href = "/task/list";
            },
            (error: any) => {
              console.log(error);
            }
          );
        } else {
          window.location.href = "/register";
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  isFieldValid(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isFieldRequired(errors, field);
    this.fieldValidators.isEmailValid(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    this.fieldValidators.isFieldMinLength(errors, field);
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  login() {
    if (this.form.valid) {
      let login: LoginRequest = {
        EMAIL_IN: this.form.get("EMAIL_IN")?.value,
        PASSWORD_IN: this.form.get("PASSWORD_IN")?.value,
      };
      this.loginService.getLogin(login.EMAIL_IN, login.PASSWORD_IN).subscribe(
        (data: LoginRequest) => {
          this.saveLoggedUser();
        },
        (error: any) => {
          console.log(error);
          this.snackbarService.failureSnackbar("Can't login, please check the credentials");
        }
        );
      } else {
        this.form.markAllAsTouched();
        this.snackbarService.failureSnackbar("Can't login, please check the fields");
      }
    }

  saveLoggedUser() {
    this.userService.getUserByMail(this.form.get("EMAIL_IN")?.value).subscribe(
      (data: any) => {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "/task/list";
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { UserService } from "../../service/user.service";
import { UserRequest } from "../../interface/user-request";
import { Router } from "@angular/router";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { IS_EMAIL_VALID, IS_LETTERS_AND_SPACES_VALID, IS_NICKNAME_SYMBOLS_VALID } from "src/app/shared/validators/regular-expressions";

@Component({
  selector: "app-register",
  templateUrl: "./register-user-form.component.html",
  styleUrls: ["./register-user-form.component.css"],
})
export class RegisterUserFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      NAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID)
        ],
      ],
      NICKNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID)

        ],
      ],
      LASTNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID)
        ],
      ],
      EMAIL_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern(IS_EMAIL_VALID),
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
    private router: Router,
    private snackbarService: SnackbarService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.form.reset();
  }


  isInvalidField(field: string) {
    const errors = this.form.get(field)?.errors;
    this.fieldValidators.isFieldRequired(errors, field);
    this.fieldValidators.isFieldMinLength(errors, field);
    this.fieldValidators.isFieldMaxLength(errors, field);
    if (field === "EMAIL_IN") {
      this.fieldValidators.isEmailValid(errors, field);
    } else if (field === "NAME_IN" || field === "LASTNAME_IN") {
      this.fieldValidators.isLettersAndSpacesValid(errors, field);
    } else {
      this.fieldValidators.isNicknameSymbolsValid(errors, field);
    }
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    )
  }

  createUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      let user: UserRequest = this.form.value;
      user.ID_ROLE_IN = 2;
      console.log(user);
      this.userService.createUser(user).subscribe(
        (result) => {
          console.log("user created...");
          console.log(result);
          this.snackbarService.successSnackbar("User registered successfully.");
          this.router.navigate(["/login"]);
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

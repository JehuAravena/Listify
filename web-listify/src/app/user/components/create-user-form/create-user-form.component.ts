import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";
import { UserService } from "../../service/user.service";
import { UserRequest } from "../../interface/user-request";
import { RoleInterface } from "../../interface/roles";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import {
  IS_EMAIL_VALID,
  IS_LETTERS_AND_SPACES_VALID,
  IS_NICKNAME_SYMBOLS_VALID,
} from "src/app/shared/validators/regular-expressions";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";

@Component({
  selector: "app-create-user-form",
  templateUrl: "./create-user-form.component.html",
  styleUrls: ["./create-user-form.component.css"],
})
export class CreateUserFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      NAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID),
        ],
      ],
      NICKNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_NICKNAME_SYMBOLS_VALID),
        ],
      ],
      LASTNAME_IN: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(IS_LETTERS_AND_SPACES_VALID),
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
      ID_ROLE_IN: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
    },
    { updateOn: "change" }
  );

  roles: RoleInterface[] = [];

  constructor(
    private fb: FormBuilder,
    public fieldValidators: FieldValidators,
    private userService: UserService,
    public displayDialogs: DisplayDialogs,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.form.reset();
    this.loadRoles();
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      (data: RoleInterface[]) => {
        this.roles = data;
        console.log(this.roles);
        console.log(this.roles[1].RO_ID_ROLE);
        console.log(this.roles[1].RO_NAME);
      },
      (error) => {
        console.log(error);
      }
    );
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
    );
  }

  createUser() {
    if (this.displayDialogs.isCanceled) {
      this.displayDialogs.isCanceled = false;
      this.snackbarService.failureSnackbar("User creation canceled");
    } else if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackbarService.failureSnackbar(
        "Invalid form, please check the required fields"
      );
    } else {
      let user: UserRequest = this.form.value;
      console.log(user);
      this.userService.createUser(user).subscribe(
        (result) => {
          console.log("user created...");
          console.log(result);
          this.snackbarService.successSnackbar("User registered successfully.");
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

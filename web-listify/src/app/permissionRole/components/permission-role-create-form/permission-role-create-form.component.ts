import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { UserService } from "src/app/user/service/user.service";
import { RoleInterface } from "src/app/user/interface/roles";
import { PermissionRoleService } from "../../service/permission-role.service";
import { PermissionRole } from "../../interface/permission-role.interface";
import { MatPaginator } from "@angular/material/paginator";
import { Permission } from "../../interface/permission.interface";
import { MatTableDataSource } from "@angular/material/table";
import { prCreation } from "../../interface/pr-creation.interface";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { FieldValidators } from "src/app/shared/validators/fieldValidators";

@Component({
  selector: "app-permission-role-create-form",
  templateUrl: "./permission-role-create-form.component.html",
  styleUrls: ["./permission-role-create-form.component.css"],
})
export class PermissionRoleCreateFormComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      ROLE_ID_IN: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
      PERMISSION_ID_IN: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
    },
    { updateOn: "change" }
  );

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  selectedPermission: string = "";
  permissions?: Permission[];

  dataSource: MatTableDataSource<Permission>;

  selected = "roleId";

  roles: RoleInterface[] = [];
  rolePermissions: PermissionRole[] = [];

  constructor(
    private fb: FormBuilder,
    public displaysDialogs: DisplayDialogs,
    private userService: UserService,
    private prService: PermissionRoleService,
    private snackbarService: SnackbarService,
    public fieldValidators: FieldValidators
  ) {
    this.dataSource = new MatTableDataSource<Permission>([]);
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadPermissions();
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      (data: RoleInterface[]) => {
        this.roles = data;
        console.log("data obtenida", this.roles);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public loadPermissions() {
    this.prService.getAllPermissions().subscribe((data: Permission[]) => {
      this.permissions = data;
      console.log("data obtenida", this.permissions);
      this.dataSource = new MatTableDataSource<Permission>(this.permissions);
    });
  }

  public getRole(roleId: string) {
    this.prService.getSpecificRoleByRoleID(roleId).subscribe((data: any) => {
      console.log("Data received from the API", this.rolePermissions);
      this.roles = data;
      roleId = this.roles[0].RO_NAME;
      console.log(this.roles);
      console.log("rol", roleId);
    });
  }

  public getPermission(idPermission: string) {
    this.prService.getAllPermissions().subscribe((data: any) => {
      console.log("Data received from the API", this.rolePermissions);

      this.permissions = data;
      console.log(this.permissions);
      console.log("permiso", idPermission);
    });
  }

  isInvalidField(field: string) {
    const error = this.form.get(field)?.errors;
    this.fieldValidators.isFieldRequired(error, field);
    if (field === "ROLE_ID_IN") {
      this.fieldValidators.isFieldRequired(error, field);
    } else if (field === "PERMISSION_ID_IN") {
      this.fieldValidators.isFieldRequired(error, field);
    }
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  createPR() {
    if (this.displaysDialogs.isCanceled) {
      this.form.reset();
      this.snackbarService.failureSnackbar("Canceled");
      this.displaysDialogs.isCanceled = false;
    } else if (this.form.invalid) {
      this.snackbarService.failureSnackbar("Invalid form");
      this.form.markAllAsTouched();
      let pr: prCreation = this.form.value;
      console.log("data", pr);
    } else {
      let pr: prCreation = this.form.value;

      console.log("permissionRole created...");
      this.prService.createPermissionRole(pr).subscribe(
        (result) => {
          console.log("data", pr);
          console.log("permissionRole created...");
          this.snackbarService.successSnackbar(
            "PermissionRole created successfully"
          );
          console.log(result);
        },
        (err) => {
          console.log(err.error.message);
          console.log("permissionRole not created...");
          this.snackbarService.failureSnackbar(err.error.error.message);
        }
      );
    }
  }
}

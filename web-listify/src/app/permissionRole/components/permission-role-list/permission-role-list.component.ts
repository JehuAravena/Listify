import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { UserService } from "src/app/user/service/user.service";
import { RoleInterface } from "src/app/user/interface/roles";
import { PermissionRoleService } from "../../service/permission-role.service";
import { PermissionRole } from "../../interface/permission-role.interface";
import { MatPaginator } from "@angular/material/paginator";
import { Permission } from "../../interface/permission.interface";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";

@Component({
  selector: "app-permission-role-list",
  templateUrl: "./permission-role-list.component.html",
  styleUrls: ["./permission-role-list.component.css"],
})
export class PermissionRoleListComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  permissionList?: Permission[];
  roleList?: RoleInterface[];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  permissions?: Permission[];
  displayedColumns: string[] = ["idPR", "roleName", "permissionName", "delete"];
  dataSource: MatTableDataSource<Permission>;

  selected = "roleId";
  idPermissionList?: number;

  form: FormGroup = this.fb.group(
    {
      ID_ROLE_IN: [
        "",
        [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
      ],
    },
    { updateOn: "change" }
  );
  roles: RoleInterface[] = [];
  rolePermissions: PermissionRole[] = [];

  constructor(
    private fb: FormBuilder,
    public displaysDialogs: DisplayDialogs,
    private userService: UserService,
    private prService: PermissionRoleService
  ) {
    this.dataSource = new MatTableDataSource<Permission>([]);
  }

  ngOnInit(): void {
    this.loadPermissions();
    this.loadRoles();
    this.subscription = this.prService.refresh$.subscribe(() => {
      this.getPermission(this.selected);
      this.loadRoles();
    });
  }
  loadPermissions() {
    this.prService.getAllPermissions().subscribe(
      (data: Permission[]) => {
        this.permissionList = data;
        console.log("Permissions obtained:", this.permissionList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      (data: RoleInterface[]) => {
        this.roles = data;
        console.log("data found", this.roles);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRoleName(id: number): string {
    const role = this.roles?.find((r) => r.RO_ID_ROLE === id);

    if (role) {
      return role.RO_NAME;
    } else {
      return "Name not found";
    }
  }

  getPermissionName(id: number): string {
    const permission = this.permissionList?.find(
      (p) => p.PE_ID_PERMISSION === id
    );

    if (permission) {
      return permission.PE_NAME;
    } else {
      return "Name not found";
    }
  }

  public getPermission(roleId: string): void {
    this.prService.getSpecificPermissionRole(roleId).subscribe((data: any) => {
      this.rolePermissions = data;
      if (this.rolePermissions) {
        this.prService
          .getSpecificPermissionRole(roleId)
          .subscribe((data: any) => {
            this.permissions = data;
            console.log("Data received from the API:", this.rolePermissions);
            this.permissions = data;
            this.dataSource = new MatTableDataSource<Permission>(
              this.permissions
            );
            if (this.paginator) {
              this.dataSource.paginator = this.paginator;
            }
          });
      } else {
        console.log("Permissions not found");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trimStart().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deletePermissionRole(idPR: number): void {
    console.log("idPR: ", idPR);
    this.displaysDialogs.deleteRolPermissionConfirmation(idPR.toString());
  }
}

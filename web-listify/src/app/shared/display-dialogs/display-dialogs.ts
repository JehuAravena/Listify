import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateTaskFormComponent } from "src/app/task/components/create-task-form/create-task-form.component";
import { UpdateTaskFormComponent } from "src/app/task/components/update-task-form/update-task-form.component";
import { CreateUserFormComponent } from "src/app/user/components/create-user-form/create-user-form.component";
import { RoleCreateFormComponent } from "src/app/role/components/role-create-form/role-create-form.component";
import { RoleUpdateComponent } from "src/app/role/components/role-update/role-update.component";
import { UserUpdateFormComponent } from "src/app/user/components/user-update-form/user-update-form.component";
import { RoleDeleteConfirmationComponent } from "src/app/role/components/role-delete-form/role-delete-confirmation.component";
import { RoleService } from "src/app/role/service/role.service";
import { SnackbarService } from "../snackbars/snackbar.service";
import { DeleteUserFormComponent } from "src/app/user/components/delete-user-form/delete-user-form.component";
import { UserService } from "src/app/user/service/user.service";
import { PrDeleteConfirmationComponent } from "src/app/permissionRole/components/pr-delete-confirmation-form/pr-delete-confirmation.component";
import { PermissionRoleService } from "src/app/permissionRole/service/permission-role.service";
import { PermissionRoleCreateFormComponent } from "src/app/permissionRole/components/permission-role-create-form/permission-role-create-form.component";
import { TaskDeleteConfirmComponent } from "src/app/task/components/task-delete-confirm/task-delete-confirm.component";
import { TaskService } from "src/app/task/service/task.service";
import { NickUpdateConfirmComponent } from "src/app/settings/components/nick-update-confirm/nick-update-confirm.component";
import { PassUpdateConfirmComponent } from "src/app/settings/components/pass-update-confirm/pass-update-confirm.component";
import { LogOutConfirmComponent } from "src/app/logout/components/log-out-confirm/log-out-confirm.component";
import { UserDeleteConfirmComponent } from "src/app/settings/components/user-delete-confirm/user-delete-confirm.component";

@Injectable()
export class DisplayDialogs {
  constructor(
    public dialog: MatDialog,
    private roService: RoleService,
    private snackbarService: SnackbarService,
    private userService: UserService,
    private prService: PermissionRoleService,
    private taskService: TaskService
  ) {}

  public openCreateTask() {
    this.dialog.open(CreateTaskFormComponent);
  }

  public openCreateUser() {
    this.dialog.open(CreateUserFormComponent);
  }

  public openUpdateTask(idTask: number) {
    this.dialog.open(UpdateTaskFormComponent, {
      data: { idTask },
    });
  }

  public openRolePermissionCreate() {
    this.dialog.open(PermissionRoleCreateFormComponent);
  }

  isCanceled: boolean = false;
  public onCancelButton() {
    this.isCanceled = true;
    this.dialog.closeAll();
  }

  public openCreateRole() {
    this.dialog.open(RoleCreateFormComponent);
  }

  public openUpdateUser(idUser: number) {
    this.dialog.open(UserUpdateFormComponent, {
      data: { idUser },
    });
  }

  public openUpdateRole(idRole: number): void {
    this.dialog.open(RoleUpdateComponent, {
      data: { idRole },
    });
  }

  public deleteRoleConfirmation(idRole: number): void {
    const dialogRef = this.dialog.open(RoleDeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.roService.deleteRole(idRole).subscribe(
          () => {
            this.snackbarService.successSnackbar("Role successfully deleted.");
          },
          (error) => {
            this.snackbarService.failureSnackbar(error.error.error.message);
            console.error(error);
          }
        );
      } else {
        this.snackbarService.failureSnackbar("Role not removed.");
      }
    });
  }

  public deleteUserConfirmation(idUser: number): void {
    const dialogRef = this.dialog.open(DeleteUserFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(idUser).subscribe(
          () => {
            this.snackbarService.successSnackbar("User successfully deleted.");
          },
          (error) => {
            this.snackbarService.failureSnackbar(error.error.error.message);
            console.error(error);
          }
        );
      } else {
        this.snackbarService.failureSnackbar("User not removed.");
      }
    });
  }

  public deleteRolPermissionConfirmation(idPR: string): void {
    const dialogRef = this.dialog.open(PrDeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.prService.deletePermissionRole(idPR).subscribe(
          () => {
            this.snackbarService.successSnackbar(
              "Permission role successfully deleted."
            );
          },
          (error) => {
            this.snackbarService.failureSnackbar(error.error.error.message);
            console.error(error);
          }
        );
      } else {
        this.snackbarService.failureSnackbar("Permission not removed.");
      }
    });
  }

  public deleteTaskConfirmation(idTask: number): void {
    const dialogRef = this.dialog.open(TaskDeleteConfirmComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.deleteTask(String(idTask)).subscribe(
          () => {
            this.snackbarService.successSnackbar("Task successfully deleted.");
          },
          (error) => {
            this.snackbarService.failureSnackbar(error.error.error.message);
            console.error(error);
          }
        );
      }
    });
  }

  public nickUpdateConfirmation(): any {
    const dialogRef = this.dialog.open(NickUpdateConfirmComponent);
    return dialogRef;
  }

  public passUpdateConfirmation(): any {
    const dialogRef = this.dialog.open(PassUpdateConfirmComponent);
    return dialogRef;
  }

  public logOutConfirmation(): any {
    const dialogRef = this.dialog.open(LogOutConfirmComponent);
    return dialogRef;
  }

  public userDeleteConfirmation(): any {
    const dialogRef = this.dialog.open(UserDeleteConfirmComponent);
    return dialogRef;
  }
}

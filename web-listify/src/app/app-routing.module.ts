import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeTestComponent } from "./home/pages/home-test/home-test.component";
import { NotFoundTestComponent } from "./pagenotfound/pages/not-found-test/not-found-test.component";
import { LogoutTestComponent } from "./logout/pages/logout-test/logout-test.component";
import { SolutionTestComponent } from "./solution/pages/solution-test/solution-test.component";
import { RegisterUserHomeComponent } from "./user/pages/register-user-home/register-user-home.component";
import { SettingsComponent } from "./settings/pages/settings/settings.component";
import { RoleHomeComponent } from "./role/pages/role-home/role-home.component";
import { LevelHomeComponent } from "./level/pages/level-home/level-home.component";
import { PermissionRoleHomeComponent } from "./permissionRole/pages/permission-role-home/permission-role-home.component";
import { ForbiddenTestComponent } from "./forbidden/page/forbidden-test/forbidden-test.component";

const routes: Routes = [
  {
    path: "task",
    loadChildren: () => import("./task/task.module").then((m) => m.TaskModule),
  },
  {
    path: "permission",
    component: PermissionRoleHomeComponent,
    loadChildren: () =>
      import("./permissionRole/permission-role.module").then(
        (m) => m.PermissionRoleModule
      ),
  },
  {
    path: "level",
    component: LevelHomeComponent,
    loadChildren: () =>
      import("./level/level.module").then((m) => m.LevelModule),
  },
  {
    path: "role",
    component: RoleHomeComponent,
    loadChildren: () => import("./role/role.module").then((m) => m.RoleModule),
  },
  {
    path: "register",
    component: RegisterUserHomeComponent,
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "home",
    component: HomeTestComponent,
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "logout",
    component: LogoutTestComponent,
  },
  {
    path: "solution",
    component: SolutionTestComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "forbidden",
    component: ForbiddenTestComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotFoundTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

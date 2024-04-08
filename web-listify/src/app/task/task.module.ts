import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material/material.module";
import { HomeTaskComponent } from "./pages/home-task/home-task.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskListComponentComponent } from "./components/task-list-component/task-list-component.component";
import { ListTaskComponent } from "./pages/list-task/list-task.component";
import { SharedModule } from "../shared/shared.module";
import { InfoComponent } from "./components/info/info.component";
import { TaskService } from "./service/task.service";
import { HttpClientModule } from "@angular/common/http";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { CreateTaskFormComponent } from "./components/create-task-form/create-task-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateTaskFormComponent } from "./components/update-task-form/update-task-form.component";
import { UserService } from "../user/service/user.service";
import { TaskDeleteConfirmComponent } from "./components/task-delete-confirm/task-delete-confirm.component";

@NgModule({
  declarations: [
    TaskListComponentComponent,
    HomeTaskComponent,
    ListTaskComponent,
    InfoComponent,
    SideMenuComponent,
    CreateTaskFormComponent,
    UpdateTaskFormComponent,
    TaskDeleteConfirmComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
  providers: [TaskService, UserService],
})
export class TaskModule {}

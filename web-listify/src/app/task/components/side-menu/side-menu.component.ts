import { Component } from "@angular/core";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { TaskService } from "../../service/task.service";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.css"],
})
export class SideMenuComponent {
  constructor(
    public displayDialogs: DisplayDialogs,
    public taskService: TaskService
  ) {}

  changeToggle(){
    this.taskService.isTodayCheck = !this.taskService.isTodayCheck;
    console.log(this.taskService.isTodayCheck);
  }
}

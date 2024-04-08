import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChildren } from "@angular/core";
import { TaskService } from "../../service/task.service";
import { Task } from "../../interface/task.interface";
import { idUserLogin } from "src/app/shared/values/shared-values";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { SnackbarService } from "src/app/shared/snackbars/snackbar.service";
import { TaskUpdateRequest } from "../../interface/task-update-request.interface";
import { Subscription } from "rxjs";

@Component({
  selector: "app-task-list-component",
  templateUrl: "./task-list-component.component.html",
  styleUrls: ["./task-list-component.component.css"],
})
export class TaskListComponentComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  @ViewChildren('edit-task-btn') editColumn?: ElementRef;
  tasks: Task[] | undefined;
  todayTasks: Task[] | undefined;
  tasksUpdate: TaskUpdateRequest[] = [];


  constructor(
    public taskService: TaskService,
    private cdRef: ChangeDetectorRef,
    public displayDialogs: DisplayDialogs,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    console.log("user: " + idUserLogin);
    this.getUserTask();
    this.getUserTodayTask();
    this.subscription = this.taskService.refresh$.subscribe(() => {
      this.getUserTodayTask();
      this.getUserTask();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getUserTask() {
    let idUser: string = idUserLogin.toLocaleString();
    this.taskService.getUserTask(idUser).subscribe((data: any) => {
      this.tasks = data;
      console.log("Data received from the API:", this.tasks);
    });
  }

  public deleteTask(idTask: number) {
    console.log("id: ", idTask);
    this.displayDialogs.deleteTaskConfirmation(idTask);
  }

  public updateTask(idTask: number) {
    this.displayDialogs.openUpdateTask(idTask);
  }

  public completeTask(idTask: number) {
    let task: TaskUpdateRequest = {
      ID_TASK_IN: idTask,
      STATUS_IN: true,
      TITLE_IN: null,
      PRIORITY_IN: null,
      DESCRIPTION_IN: null,
    };
    this.taskService.updateTask(task).subscribe(
      (result) => {
        console.log("task updated...");
        console.log(result);
      },
      (err) => {
        console.log(err);
        this.snackbarService.failureSnackbar(err.error.error.message);
      }
    );
  }

  isTaskDone(taskId: number) {
    let task: Task | undefined;
    if (this.taskService.isTodayCheck) {
      task = this.todayTasks?.find((task) => task.TA_ID_TASK === taskId);
    } else {
      task = this.tasks?.find((task) => task.TA_ID_TASK === taskId);
    }
    if (task?.TA_STATUS === 1) {
      return true;
    } else {
      return false;
    }
  }

  getUserTodayTask() {
    let idUser: string = idUserLogin.toLocaleString();
    let today = new Date();
    let todayString = today.toISOString().split("T")[0];
    this.taskService.getUserTask(idUser).subscribe((data: any) => {
      this.todayTasks = data.filter((task: Task) => {
        let taskDate = task.TA_CREATION_DATE?.split("T")[0];
        return taskDate >= todayString;
      });
      console.log("Data received from the API:", this.todayTasks);
    });
  }

}

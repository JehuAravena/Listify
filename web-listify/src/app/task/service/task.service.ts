import {
  getAllTask,
  getUserTask,
  createTask,
  deleteTask,
  updateTask,
} from "src/app/shared/config/endpoints/endpoints";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../interface/task.interface";
import { TaskRequest } from "../interface/task-request.interface";
import { Observable, Subject, tap } from "rxjs";
import { TaskUpdateRequest } from "../interface/task-update-request.interface";

@Injectable()
export class TaskService {
  private urlCreateTask = createTask;
  private urlAllTask = getAllTask;
  private urlUserTask = getUserTask;
  private urlDeleteTask = deleteTask;
  private urlUpdateTask = updateTask;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  isTodayCheck: boolean = false;

  get refresh$() {
    return this._refresh$;
  }

  getAllTask() {
    return this.http.get<Task[]>(this.urlAllTask);
  }

  getUserTask(userID: string) {
    const urlWithUserID = this.urlUserTask.replace(":ID_USER_IN", userID);
    return this.http.get(urlWithUserID);
  }

  public createTask(task: TaskRequest): Observable<TaskRequest> {
    return this.http.post<TaskRequest>(this.urlCreateTask, task).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public deleteTask(idTask: string) {
    const deteleTaskId = this.urlDeleteTask.replace(":ID_TASK_IN", idTask);
    return this.http.delete(deteleTaskId).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public updateTask(task: TaskUpdateRequest): Observable<TaskUpdateRequest> {
    return this.http.put<TaskUpdateRequest>(this.urlUpdateTask, task).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}

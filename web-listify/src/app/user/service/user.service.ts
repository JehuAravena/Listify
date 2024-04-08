import {
  createUser,
  deleteUser,
  getAllRole,
  getAllUser,
  getSpecificUser,
  getUserByMail,
  updateUser,
} from "src/app/shared/config/endpoints/endpoints";
import { HttpClient } from "@angular/common/http";
import { UserRequest } from "../interface/user-request";
import { RoleInterface } from "../interface/roles";
import { Observable, Subject, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../interface/user";
import { UserUpdateRequest } from "../interface/user-update-request";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private urlCreateUser = createUser;
  private urlGetRoles = getAllRole;
  public urlGetSpecificUser = getSpecificUser;
  private urlGetAllUsers = getAllUser;
  private urlUpdateUser = updateUser;
  private urlDeleteUser = deleteUser;
  private urlGetUserByMail = getUserByMail;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  get refresh$() {
    return this._refresh$;
  }

  public createUser(user: UserRequest): Observable<UserRequest> {
    return this.http.post<UserRequest>(this.urlCreateUser, user).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public registerUser(user: UserRequest): Observable<UserRequest> {
    return this.http.post<UserRequest>(this.urlCreateUser, user);
  }

  public getRoles(): Observable<RoleInterface[]> {
    return this.http.get<RoleInterface[]>(this.urlGetRoles);
  }

  public getSpecificUser(userID: string) {
    const urlWithUserID = this.urlGetSpecificUser.replace(
      ":ID_USER_IN",
      userID
    );
    return this.http.get(urlWithUserID);
  }

  public getUserByMail(email: string) {
    const urlWithUserEmail = this.urlGetUserByMail.replace(
      ":EMAIL_IN",
      email
    );
    return this.http.get(urlWithUserEmail);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlGetAllUsers);
  }

  public updateUser(user: UserUpdateRequest): Observable<UserUpdateRequest> {
    return this.http.put<UserUpdateRequest>(this.urlUpdateUser, user).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public deleteUser(idUser: number): Observable<User> {
    return this.http
      .put<User>(`${this.urlDeleteUser}/${idUser}`, {
        US_ACTIVE: true,
      })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }
}

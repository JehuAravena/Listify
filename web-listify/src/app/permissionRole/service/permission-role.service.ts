import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";
import {
  createPermissionRole,
  deletePermissionRole,
  getAllRole,
  getPermission,
  getPermissionRole,
} from "src/app/shared/config/endpoints/endpoints";
import { MatPaginator } from "@angular/material/paginator";
import { Permission } from "../interface/permission.interface";
import { prCreation } from "../interface/pr-creation.interface";

@Injectable({
  providedIn: "root",
})
export class PermissionRoleService {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  private urlGetPermissionRole = getPermissionRole;
  private urlDeletePR = deletePermissionRole;
  private urlGetAllRole = getAllRole;
  private urlCreatePermissionRole = createPermissionRole;
  private urlGetPermission = getPermission;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  get refresh$() {
    console.log("refresh");
    return this._refresh$;
  }

  public getSpecificPermissionRole(roleID: string) {
    const urlWithRoleID = this.urlGetPermissionRole.replace(
      ":ID_ROLE_IN",
      roleID
    );
    return this.http.get(urlWithRoleID);
  }

  getSpecificRoleByRoleID(roleID: string) {
    const urlWithRoleID = this.urlGetAllRole.replace(":ID_ROLE_IN", roleID);
    return this.http.get(urlWithRoleID);
  }

  public deletePermissionRole(idPR: string) {
    const deletePermissionRoleId = this.urlDeletePR.replace(
      ":ID_ROLE_IN",
      idPR
    );
    return this.http.delete(deletePermissionRoleId).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public createPermissionRole(pr: prCreation): Observable<prCreation> {
    return this.http.post<prCreation>(this.urlCreatePermissionRole, pr).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public getAllPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.urlGetPermission);
  }
}

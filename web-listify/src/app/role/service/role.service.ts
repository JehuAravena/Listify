import {
  createRole,
  deleteRole,
  getAllRole,
  updateRole,
} from "src/app/shared/config/endpoints/endpoints";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { RoleRequest } from "../interface/roles-request.interface";
import { RolesInterface } from "../interface/roles.interface";
import { rolesUpdateRequest } from "../interface/roles-update-request.interface";
import { RoleDelete } from "../interface/role-delete.interface";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  private urlCreateRole = createRole;
  private urlGetAllRoles = getAllRole;
  private urlUpdateRole = updateRole;
  private urlDeleteRole = deleteRole;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  get refresh$() {
    return this._refresh$;
  }

  public createRole(roles: RoleRequest): Observable<RoleRequest> {
    return this.http.post<RoleRequest>(this.urlCreateRole, roles).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public getAllRoles(): Observable<RolesInterface[]> {
    return this.http.get<RolesInterface[]>(this.urlGetAllRoles);
  }

  public updateRole(role: rolesUpdateRequest): Observable<rolesUpdateRequest> {
    return this.http.put<rolesUpdateRequest>(this.urlUpdateRole, role).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  public deleteRole(idRoles: number): Observable<RoleDelete> {
    return this.http
      .put<RoleDelete>(`${this.urlDeleteRole}/${idRoles}`, { RO_ACTIVE: true })
      .pipe(
        tap(() => {
          this._refresh$.next();
        })
      );
  }
}

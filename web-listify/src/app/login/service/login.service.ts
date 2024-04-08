import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { loginEndpoint } from 'src/app/shared/config/endpoints/endpoints';
import { LoginRequest } from '../interface/login-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private urlLogin = loginEndpoint;

  constructor(private http: HttpClient) { }
  public getLogin(email:string, password:string): Observable<LoginRequest>{
    return this.http.get<LoginRequest>(this.urlLogin.replace(':EMAIL_IN', email).replace(':PASSWORD_IN', password));
  }
}
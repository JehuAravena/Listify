import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTestComponent } from './pages/login-test/login-test.component';
import { LoginService } from './service/login.service';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleSigninButtonDirective, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    LoginComponent,
    LoginTestComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule
  ],
  providers: [ 
    LoginService,
    GoogleSigninButtonDirective
  ]
})
export class LoginModule { }
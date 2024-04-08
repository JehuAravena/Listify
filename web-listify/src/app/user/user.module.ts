import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { MaterialModule } from '../material/material.module';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { RegisterUserHomeComponent } from './pages/register-user-home/register-user-home.component';
import { UserMainTableComponent } from './components/user-main-table/user-main-table.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { DeleteUserFormComponent } from './components/delete-user-form/delete-user-form.component';
import { RegisterGoogleUserComponent } from './components/register-google-user/register-google-user.component';

@NgModule({
  declarations: [
    HomeUserComponent,
    CreateUserFormComponent,
    RegisterUserFormComponent,
    RegisterUserHomeComponent,
    UserMainTableComponent,
    UserUpdateFormComponent,
    DeleteUserFormComponent,
    RegisterGoogleUserComponent  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule   
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
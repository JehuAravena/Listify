import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionRoleHomeComponent } from './pages/permission-role-home/permission-role-home.component';
import { PermissionRoleRoutingModule } from './permission-role-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionRoleService } from './service/permission-role.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { PermissionRoleListComponent } from './components/permission-role-list/permission-role-list.component';
import { PrDeleteConfirmationComponent } from './components/pr-delete-confirmation-form/pr-delete-confirmation.component';
import { PermissionRoleCreateFormComponent } from './components/permission-role-create-form/permission-role-create-form.component';

@NgModule({
  declarations: [
    PermissionRoleHomeComponent,
    PermissionRoleListComponent,
    PrDeleteConfirmationComponent,
    PermissionRoleCreateFormComponent
  ],

  imports: [
    CommonModule,
    PermissionRoleRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,


  ],
  providers: [
    PermissionRoleService
  ]

})
export class PermissionRoleModule { }

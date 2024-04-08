import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleHomeComponent } from './pages/role-home/role-home.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleCreateFormComponent } from './components/role-create-form/role-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleService } from './service/role.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { RoleListComponentComponent } from './components/role-list-component/role-list-component.component';
import { RoleUpdateComponent } from './components/role-update/role-update.component';
import { RoleDeleteConfirmationComponent } from './components/role-delete-form/role-delete-confirmation.component';

@NgModule({
    declarations: [
        RoleHomeComponent,
        RoleCreateFormComponent,
        RoleListComponentComponent,
        RoleUpdateComponent,
        RoleDeleteConfirmationComponent,        
    ],
    imports: [
        CommonModule,
        RoleRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [
        RoleService
    ]
})

export class RoleModule {}
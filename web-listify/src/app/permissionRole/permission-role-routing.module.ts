import {NgModule} from '@angular/core';
import { PermissionRoleHomeComponent } from './pages/permission-role-home/permission-role-home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: '',
    component: PermissionRoleHomeComponent
}];

@NgModule ({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})

export class PermissionRoleRoutingModule {}
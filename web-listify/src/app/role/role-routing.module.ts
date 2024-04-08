import {NgModule} from '@angular/core';
import { RoleHomeComponent } from './pages/role-home/role-home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSideMenuComponent } from '../shared/components/admin-side-menu/admin-side-menu.component';

const routes: Routes = [{
    path: '',
    component: RoleHomeComponent,
    children: [
        {   
            path: 'create',
            component: AdminSideMenuComponent
        }
    ]
}];

@NgModule ({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})

export class RoleRoutingModule {}
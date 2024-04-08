import { NgModule } from '@angular/core';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { AdminSideMenuComponent } from '../shared/components/admin-side-menu/admin-side-menu.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: HomeUserComponent,
    children: [
        {   
            path: 'create',
            component: AdminSideMenuComponent
        },
    ]
}];

@NgModule ({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})

export class UserRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTestComponent } from './pages/login-test/login-test.component';

const routes: Routes = [
    { path: '',
    component: LoginTestComponent,
    children: [
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }

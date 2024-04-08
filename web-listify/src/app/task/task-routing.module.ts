import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeTaskComponent } from './pages/home-task/home-task.component';
import { ListTaskComponent } from './pages/list-task/list-task.component'

const routes: Routes = [{
    path: '',
    component: HomeTaskComponent,
    children: [
        {   
            path: 'list',
            component: ListTaskComponent
        },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
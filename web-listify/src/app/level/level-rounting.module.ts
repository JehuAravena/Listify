import { NgModule } from '@angular/core';
import { LevelHomeComponent } from './pages/level-home/level-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: LevelHomeComponent,
}];

@NgModule ({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})

export class LevelRoutingModule {}
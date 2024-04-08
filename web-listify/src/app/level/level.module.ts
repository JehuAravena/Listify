import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelListTableComponent } from './components/level-list-table/level-list-table.component';
import { LevelHomeComponent } from './pages/level-home/level-home.component';
import { LevelService } from './service/level.service';
import { LevelRoutingModule } from './level-rounting.module';
import { SharedModule } from '../shared/shared.module';
import {  HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LevelListTableComponent,
    LevelHomeComponent
  ],
  imports: [
    CommonModule,
    LevelRoutingModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [
    LevelService
  ]
})
export class LevelModule { }

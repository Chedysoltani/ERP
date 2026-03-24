import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerDashboardComponent } from './manager-dashboard.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [
    ManagerDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }

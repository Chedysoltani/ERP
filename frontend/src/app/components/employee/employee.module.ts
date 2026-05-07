import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { SkillsProfileComponent } from './skills-profile.component';

const routes = [
  { path: '', component: EmployeeDashboardComponent }
];

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    SkillsProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }

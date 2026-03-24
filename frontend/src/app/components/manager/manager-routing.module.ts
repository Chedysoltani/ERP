import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard.component';
import { ManagerAuthGuard } from '../../guards/manager-auth.guard';

const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./manager-auth.component').then(c => c.ManagerAuthComponent)
  },
  { 
    path: 'login', 
    loadComponent: () => import('./manager-auth.component').then(c => c.ManagerAuthComponent)
  },
  { 
    path: 'dashboard', 
    component: ManagerDashboardComponent,
    canActivate: [ManagerAuthGuard]
  },
  { 
    path: 'auth', 
    loadComponent: () => import('./manager-auth.component').then(c => c.ManagerAuthComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }

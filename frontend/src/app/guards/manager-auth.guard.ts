import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ManagerAuthService } from '../services/manager-auth.service';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthGuard implements CanActivate {
  constructor(
    private managerAuthService: ManagerAuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Guard canActivate - Is logged in:', this.managerAuthService.isLoggedIn);
    console.log('Guard canActivate - Current manager:', this.managerAuthService.currentManagerValue);
    
    // Attendre un peu pour laisser le temps au service de se mettre à jour
    return of(true).pipe(
      delay(100),
      map(() => {
        console.log('Guard après délai - Is logged in:', this.managerAuthService.isLoggedIn);
        if (this.managerAuthService.isLoggedIn) {
          console.log('Guard: accès autorisé');
          return true;
        } else {
          // Rediriger vers la page de login manager
          console.log('Guard: accès refusé, redirection vers login');
          this.router.navigate(['/manager-login']);
          return false;
        }
      })
    );
  }
}

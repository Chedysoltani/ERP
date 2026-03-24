import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, RegisterData } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  selectedRole = 'employee';
  authForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  roles = [
    { value: 'employee', label: 'Employee' },
    { value: 'manager', label: 'Manager' },
    { value: 'admin', label: 'Administrateur' }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onRoleChange(role: string) {
    this.selectedRole = role;
  }

  onLogin() {
    if (this.authForm.invalid) {
      this.markFormAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const loginData = {
      email: this.authForm.get('email')?.value,
      password: this.authForm.get('password')?.value
    };

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          this.successMessage = 'Connexion réussie! Redirection...';
          // Stocker les infos utilisateur et rediriger
          localStorage.setItem('user', JSON.stringify(response.data));
          // TODO: Rediriger vers le dashboard approprié selon le rôle
          setTimeout(() => {
            // Redirection à implémenter
            console.log('Redirection vers dashboard...');
          }, 1500);
        } else {
          this.errorMessage = response.message || 'Erreur lors de la connexion';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Erreur lors de la connexion';
      }
    });
  }

  private markFormAsTouched() {
    Object.keys(this.authForm.controls).forEach(key => {
      this.authForm.get(key)?.markAsTouched();
    });
  }

  getRoleIcon(role: string): string {
    const icons = {
      'employee': 'bi-person',
      'manager': 'bi-briefcase',
      'admin': 'bi-shield-check'
    };
    return icons[role as keyof typeof icons] || 'bi-person';
  }
}

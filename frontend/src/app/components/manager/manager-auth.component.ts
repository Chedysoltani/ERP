import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManagerAuthService, Manager } from '../../services/manager-auth.service';

@Component({
  selector: 'app-manager-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manager-auth.component.html',
  styleUrls: ['./manager-auth.component.css']
})
export class ManagerAuthComponent implements OnInit {
  isSignIn = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private managerAuthService: ManagerAuthService,
    private router: Router
  ) {
    // Rediriger si déjà connecté
    if (this.managerAuthService.isLoggedIn) {
      this.router.navigate(['/manager']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      telephone: ['']
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  toggleMode(): void {
    this.isSignIn = !this.isSignIn;
    this.errorMessage = '';
    this.successMessage = '';
    this.loginForm.reset();
    this.registerForm.reset();
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    this.managerAuthService.login(email, password).subscribe({
      next: (manager: Manager) => {
        console.log('Manager connecté:', manager);
        console.log('Navigation vers /manager/dashboard...');
        this.router.navigate(['/manager/dashboard']).then(
          success => {
            console.log('Navigation réussie:', success);
          },
          error => {
            console.error('Erreur de navigation:', error);
          }
        );
      },
      error: (error) => {
        this.loading = false;
        if (error.error?.message) {
          this.errorMessage = error.error.message;
        } else if (error.message) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = 'Erreur de connexion. Veuillez réessayer.';
        }
        console.error('Erreur de login:', error);
      }
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm);
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { nom, prenom, email, password, telephone } = this.registerForm.value;

    this.managerAuthService.register({
      nom,
      prenom,
      email,
      password,
      telephone
    }).subscribe({
      next: (response) => {
        this.loading = false;
        this.successMessage = 'Compte manager créé avec succès! Vous pouvez maintenant vous connecter.';
        setTimeout(() => {
          this.isSignIn = true;
          this.successMessage = '';
          this.registerForm.reset();
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        if (error.error?.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Erreur lors de la création du compte. Veuillez réessayer.';
        }
        console.error('Erreur d\'inscription:', error);
      }
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get loginControls() {
    return this.loginForm.controls;
  }

  get registerControls() {
    return this.registerForm.controls;
  }
}

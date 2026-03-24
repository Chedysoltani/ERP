import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface RegisterData {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  telephone?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  register(userData: RegisterData): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('/users', userData);
  }

  login(credentials: LoginData): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('/users/login', credentials);
  }

  // Méthodes CRUD pour les utilisateurs
  getAllUsers(): Observable<any> {
    return this.apiService.get<any>('/users');
  }

  getUserById(id: number): Observable<any> {
    return this.apiService.getById<any>('/users', id);
  }

  createUser(userData: any): Observable<any> {
    return this.apiService.post<any>('/users', userData);
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.apiService.put<any>('/users', id, userData);
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.delete<any>('/users', id);
  }

  // Pour plus tard, quand on ajoutera le login
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

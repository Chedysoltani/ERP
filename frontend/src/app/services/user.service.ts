import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface User {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  date_creation?: string;
  actif?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = '/users';

  constructor(private apiService: ApiService) { }

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.apiService.get<ApiResponse<User[]>>(this.endpoint);
  }

  getUserById(id: number): Observable<ApiResponse<User>> {
    return this.apiService.getById<ApiResponse<User>>(this.endpoint, id);
  }

  createUser(user: User): Observable<ApiResponse<{ id: number }>> {
    return this.apiService.post<ApiResponse<{ id: number }>>(this.endpoint, user);
  }

  updateUser(id: number, user: User): Observable<ApiResponse<void>> {
    return this.apiService.put<ApiResponse<void>>(this.endpoint, id, user);
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    return this.apiService.delete<ApiResponse<void>>(this.endpoint, id);
  }
}

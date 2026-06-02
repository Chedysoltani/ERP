import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AdminUser {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  telephone?: string;
  actif: number;
  date_creation?: string;
  date_modification?: string;
}

export interface AdminStats {
  totalUsers: number;
  activeEmployees: number;
  activeManagers: number;
  totalAdmins: number;
  todayLogins: number;
  inactiveUsers: number;
  attendanceToday: number;
}

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private apiUrl = environment.apiUrl;
  private currentAdminSubject = new BehaviorSubject<AdminUser | null>(null);
  currentAdmin$ = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('adminUser');
      if (stored) this.currentAdminSubject.next(JSON.parse(stored));
    } catch (_) {}
  }

  get token(): string | null {
    return localStorage.getItem('adminToken');
  }

  get isLoggedIn(): boolean {
    return !!this.token && !!this.currentAdminSubject.value;
  }

  get currentAdmin(): AdminUser | null {
    return this.currentAdminSubject.value;
  }

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, { email, password }).pipe(
      tap(res => {
        if (res.success && res.data?.role === 'admin') {
          // token is at res.token, not res.data.token
          localStorage.setItem('adminToken', res.token);
          const userWithToken = { ...res.data, token: res.token };
          localStorage.setItem('adminUser', JSON.stringify(userWithToken));
          this.currentAdminSubject.next(userWithToken);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    this.currentAdminSubject.next(null);
  }

  getStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/stats`, { headers: this.headers() });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/users`, { headers: this.headers() });
  }

  createUser(data: Partial<AdminUser> & { password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/users`, data, { headers: this.headers() });
  }

  updateUser(id: number, data: Partial<AdminUser>): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/users/${id}`, data, { headers: this.headers() });
  }

  toggleUser(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/toggle`, {}, { headers: this.headers() });
  }

  resetPassword(id: number, newPassword: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/admin/users/${id}/reset-password`, { newPassword }, { headers: this.headers() });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, { headers: this.headers() });
  }

  getActivity(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/activity`, { headers: this.headers() });
  }

  getRoleStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/role-stats`, { headers: this.headers() });
  }

  getGrowth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/growth`, { headers: this.headers() });
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/notifications`, { headers: this.headers() });
  }

  getPermissions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/permissions`, { headers: this.headers() });
  }

  savePermissions(permissions: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/permissions`, { permissions }, { headers: this.headers() });
  }

  getSettings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/settings`, { headers: this.headers() });
  }

  saveSettings(settings: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/settings`, settings, { headers: this.headers() });
  }
}

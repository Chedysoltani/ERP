import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Méthodes GET
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { headers: this.getHeaders() });
  }

  getById<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}/${id}`, { headers: this.getHeaders() });
  }

  // Méthodes POST
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, data, { headers: this.getHeaders() });
  }

  // Méthodes PUT
  put<T>(endpoint: string, id: number, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}/${id}`, data, { headers: this.getHeaders() });
  }

  // Méthodes DELETE
  delete<T>(endpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}/${id}`, { headers: this.getHeaders() });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = `${environment.apiUrl}/employee`;
  private tasksBase = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  getTaskNotifications(employeeId: number): Observable<any> {
    return this.http.get(`${this.tasksBase}/notifications/employee/${employeeId}`);
  }

  markNotificationRead(notifId: number): Observable<any> {
    return this.http.patch(`${this.tasksBase}/notifications/${notifId}/read`, {});
  }

  markAllNotificationsRead(employeeId: number): Observable<any> {
    return this.http.patch(`${this.tasksBase}/notifications/employee/${employeeId}/read-all`, {});
  }

  // Récupérer le dashboard complet de l'employé
  getEmployeeDashboard(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/dashboard`);
  }

  // Récupérer les tâches de l'employé
  getEmployeeTasks(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/tasks`);
  }

  // Récupérer les projets de l'employé
  getEmployeeProjects(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/projects`);
  }

  // Récupérer les réunions de l'employé
  getEmployeeMeetings(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/meetings`);
  }

  // Mettre à jour le statut d'une tâche
  updateTaskStatus(employeeId: number, taskId: number, status: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${employeeId}/tasks/${taskId}/status`, { status });
  }

  // Récupérer les timesheets de l'employé
  getEmployeeTimesheets(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}/timesheets`);
  }

  // Créer un nouveau timesheet
  createTimesheet(employeeId: number, timesheetData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${employeeId}/timesheets`, timesheetData);
  }

  // Mettre à jour un timesheet
  updateTimesheet(employeeId: number, timesheetId: number, timesheetData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}`, timesheetData);
  }

  // Soumettre un timesheet pour validation
  submitTimesheet(employeeId: number, timesheetId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}/submit`, {});
  }

  // Supprimer un timesheet
  deleteTimesheet(employeeId: number, timesheetId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employeeId}/timesheets/${timesheetId}`);
  }
}

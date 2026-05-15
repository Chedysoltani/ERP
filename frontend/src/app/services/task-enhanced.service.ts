import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ManagerAuthService } from './manager-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskEnhancedService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private managerAuth: ManagerAuthService
  ) { }

  private authOpts(): { headers: Record<string, string> } {
    const m = this.managerAuth.currentManagerValue;
    const headers: Record<string, string> = {};
    if (m?.token) {
      headers['Authorization'] = `Bearer ${m.token}`;
    }
    return { headers };
  }

  // ==================== MULTI-EMPLOYEE ASSIGNMENT ====================

  // Ajouter un employé à une tâche
  addEmployeeToTask(taskId: number, employeeId: number, status: string = 'pending'): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/assignments`, {
      employee_id: employeeId,
      status
    }, this.authOpts());
  }

  // Retirer un employé d'une tâche
  removeEmployeeFromTask(taskId: number, employeeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/assignments/${employeeId}`, this.authOpts());
  }

  // Mettre à jour le statut d'assignation d'un employé
  updateAssignmentStatus(taskId: number, employeeId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/assignments/${employeeId}/status`, {
      status
    }, this.authOpts());
  }

  // ==================== TASK DEPENDENCIES ====================

  // Obtenir les dépendances d'une tâche
  getTaskDependencies(taskId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/dependencies`, this.authOpts());
  }

  // Ajouter une dépendance entre tâches
  addTaskDependency(taskId: number, dependsOnTaskId: number, dependencyType: string = 'finish_to_start', lagDays: number = 0): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/dependencies`, {
      depends_on_task_id: dependsOnTaskId,
      dependency_type: dependencyType,
      lag_days: lagDays
    }, this.authOpts());
  }

  // Supprimer une dépendance
  removeTaskDependency(taskId: number, dependsOnTaskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}/dependencies/${dependsOnTaskId}`, this.authOpts());
  }

  // Obtenir toutes les dépendances d'un projet pour détecter les cycles côté client
  getProjectTaskDependencies(projectId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/project/${projectId}/dependencies`, this.authOpts());
  }

  /** Prédécesseurs en retard qui bloquent encore des tâches ouvertes du projet */
  getProjectDependencyAlerts(projectId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/dependency-alerts/${projectId}`, this.authOpts());
  }

  // ==================== TASK TIME TRACKING ====================

  // Démarrer une session de temps
  startTimeSession(taskId: number, employeeId: number, description?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks/${taskId}/time-sessions`, {
      employee_id: employeeId,
      description
    }, this.authOpts());
  }

  // Mettre en pause une session
  pauseTimeSession(taskId: number, sessionId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/pause`, {}, this.authOpts());
  }

  // Reprendre une session
  resumeTimeSession(taskId: number, sessionId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/resume`, {}, this.authOpts());
  }

  // Terminer une session
  completeTimeSession(taskId: number, sessionId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}/time-sessions/${sessionId}/complete`, {}, this.authOpts());
  }

  // Obtenir les sessions de temps d'une tâche
  getTaskTimeSessions(taskId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/time-sessions`, this.authOpts());
  }

  // Obtenir les sessions de pointage d'aujourd'hui pour un employé
  getTodaySessionsByEmployee(employeeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/employee/${employeeId}/today-sessions`, this.authOpts());
  }

  // ==================== TASK EDIT HISTORY ====================

  // Obtenir l'historique d'édition d'une tâche
  getTaskEditHistory(taskId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}/edit-history`, this.authOpts());
  }
}

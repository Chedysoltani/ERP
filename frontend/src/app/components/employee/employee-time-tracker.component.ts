import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskEnhancedService } from '../../services/task-enhanced.service';

interface TimeSession {
  id: number;
  task_id: number;
  employee_id: number;
  start_time: string;
  end_time: string | null;
  duration_seconds: number;
  status: 'running' | 'paused' | 'completed';
  description: string;
  employee_name: string;
  task_title?: string;
}

@Component({
  selector: 'app-employee-time-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="employee-time-tracker">
      <!-- Main Tracker Section -->
      <div class="tracker-main">
        <div class="tracker-header">
          <h3><i class="bi bi-stopwatch-fill"></i> Pointage</h3>
          <span *ngIf="activeSession" class="active-indicator">
            <i class="bi bi-circle-fill"></i> En cours
          </span>
        </div>

        <!-- Current Task Info -->
        <div class="current-task-info" *ngIf="currentTask">
          <div class="task-info-card">
            <div class="task-title">{{ currentTask.title }}</div>
            <div class="task-meta">
              <span class="task-status" [ngClass]="'status-' + currentTask.status">
                {{ getTaskStatusLabel(currentTask.status) }}
              </span>
              <span class="task-priority" [ngClass]="'priority-' + currentTask.priority">
                {{ getPriorityLabel(currentTask.priority) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Timer Display -->
        <div class="timer-section" *ngIf="activeSession">
          <div class="timer-display">
            <div class="timer-value">{{ formatTime(elapsedTime) }}</div>
            <div class="session-status">Pointage en cours</div>
          </div>
        </div>

        <!-- Controls -->
        <div class="controls-section">
          <div class="control-buttons">
            <button
              *ngIf="!activeSession && currentTask"
              class="btn-control btn-start"
              (click)="startSession()">
              <i class="bi bi-play-circle-fill"></i>
              Démarrer
            </button>

            <button
              *ngIf="activeSession && activeSession.status === 'running'"
              class="btn-control btn-pause"
              (click)="pauseSession()">
              <i class="bi bi-pause-circle-fill"></i>
              Pause
            </button>

            <button
              *ngIf="activeSession && activeSession.status === 'paused'"
              class="btn-control btn-resume"
              (click)="resumeSession()">
              <i class="bi bi-play-circle-fill"></i>
              Reprendre
            </button>

            <button
              *ngIf="activeSession"
              class="btn-control btn-stop"
              (click)="completeSession()">
              <i class="bi bi-stop-circle-fill"></i>
              Terminer
            </button>
          </div>
        </div>

        <!-- No Task Selected -->
        <div class="no-task-message" *ngIf="!currentTask">
          <i class="bi bi-inbox"></i>
          <p>Sélectionnez une tâche pour commencer le pointage</p>
        </div>
      </div>

      <!-- Today Summary -->
      <div class="today-summary" *ngIf="todayTotalHours > 0">
        <h4><i class="bi bi-calendar-day"></i> Aujourd'hui</h4>
        <div class="summary-stats">
          <div class="stat-card">
            <div class="stat-value">{{ formatTime(todayTotalSeconds) }}</div>
            <div class="stat-label">Total pointé</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ todayTasksSessions.length }}</div>
            <div class="stat-label">Tâches pointées</div>
          </div>
        </div>
      </div>

      <!-- Today Sessions List -->
      <div class="today-sessions" *ngIf="todayTasksSessions.length > 0">
        <h4><i class="bi bi-list-ul"></i> Tâches pointées aujourd'hui</h4>
        <div class="sessions-grid">
          <div *ngFor="let session of todayTasksSessions" class="session-card">
            <div class="session-task-title">{{ session.task_title || 'Tâche #' + session.task_id }}</div>
            <div class="session-time">{{ formatTime(session.duration_seconds) }}</div>
            <div class="session-status" [ngClass]="'status-' + session.status">
              {{ getStatusLabel(session.status) }}
            </div>
            <div class="session-time-range">
              {{ formatDateTime(session.start_time) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .employee-time-tracker {
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e7eb;
    }

    .tracker-main {
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid #e5e7eb;
    }

    .tracker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .tracker-header h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #1f2937;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .active-indicator {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      background: #dcfce7;
      border-radius: 20px;
      color: #166534;
      font-size: 12px;
      font-weight: 600;
    }

    .active-indicator i {
      font-size: 10px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .current-task-info {
      margin-bottom: 20px;
    }

    .task-info-card {
      background: #f0f9ff;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 16px;
      border-left: 4px solid #3b82f6;
    }

    .task-title {
      font-size: 16px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .task-meta {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .task-status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .task-status.status-todo {
      background: #e5e7eb;
      color: #374151;
    }

    .task-status.status-in_progress {
      background: #dbeafe;
      color: #1e40af;
    }

    .task-status.status-done {
      background: #dcfce7;
      color: #166534;
    }

    .task-priority {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .task-priority.priority-high {
      background: #fef2f2;
      color: #dc2626;
    }

    .task-priority.priority-medium {
      background: #fef3c7;
      color: #d97706;
    }

    .task-priority.priority-low {
      background: #dcfce7;
      color: #166534;
    }

    .timer-section {
      margin: 20px 0;
    }

    .timer-display {
      text-align: center;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      color: white;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    }

    .timer-value {
      font-size: 56px;
      font-weight: 800;
      font-family: 'Courier New', monospace;
      margin-bottom: 12px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .session-status {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .controls-section {
      margin: 24px 0;
    }

    .control-buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
    }

    .btn-control {
      padding: 14px 16px;
      border: none;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .btn-start {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
    }

    .btn-start:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
    }

    .btn-pause {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: white;
    }

    .btn-pause:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
    }

    .btn-resume {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
    }

    .btn-resume:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }

    .btn-stop {
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: white;
    }

    .btn-stop:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
    }

    .no-task-message {
      text-align: center;
      padding: 40px 20px;
      color: #6b7280;
      background: #f9fafb;
      border-radius: 12px;
      border: 2px dashed #d1d5db;
    }

    .no-task-message i {
      font-size: 32px;
      display: block;
      margin-bottom: 12px;
      opacity: 0.6;
    }

    .today-summary {
      margin-bottom: 24px;
    }

    .today-summary h4 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 700;
      color: #1f2937;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .summary-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 12px;
    }

    .stat-card {
      background: #f3f4f6;
      border-radius: 12px;
      padding: 16px;
      text-align: center;
      border: 1px solid #e5e7eb;
    }

    .stat-value {
      font-size: 28px;
      font-weight: 800;
      font-family: 'Courier New', monospace;
      color: #1f2937;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 12px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .today-sessions h4 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 700;
      color: #1f2937;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sessions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px;
    }

    .session-card {
      background: #f9fafb;
      border-radius: 12px;
      padding: 16px;
      border: 1px solid #e5e7eb;
      border-left: 4px solid #3b82f6;
    }

    .session-task-title {
      font-size: 14px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 8px;
    }

    .session-time {
      font-size: 18px;
      font-weight: 800;
      font-family: 'Courier New', monospace;
      color: #3b82f6;
      margin-bottom: 8px;
    }

    .session-status {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .session-status.status-completed {
      background: #dcfce7;
      color: #166534;
    }

    .session-status.status-paused {
      background: #fef3c7;
      color: #92400e;
    }

    .session-status.status-running {
      background: #dbeafe;
      color: #1e40af;
    }

    .session-time-range {
      font-size: 11px;
      color: #6b7280;
    }

    @media (max-width: 768px) {
      .control-buttons {
        grid-template-columns: 1fr;
      }

      .timer-value {
        font-size: 36px;
      }

      .sessions-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EmployeeTimeTrackerComponent implements OnInit, OnDestroy {
  @Input() taskId!: number;
  @Input() employeeId?: number;
  @Input() currentTask: any;
  @Output() taskCompleted = new EventEmitter<any>();

  activeSession: TimeSession | null = null;
  sessions: TimeSession[] = [];
  todayTasksSessions: TimeSession[] = [];
  elapsedTime: number = 0;
  sessionDescription: string = '';
  private timerInterval: any = null;

  constructor(private taskEnhancedService: TaskEnhancedService) {}

  ngOnInit() {
    if (this.taskId) {
      this.loadSessions();
      this.checkActiveSession();
    }
    if (this.employeeId) {
      this.loadTodaysSessions();
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  loadSessions() {
    this.taskEnhancedService.getTaskTimeSessions(this.taskId).subscribe({
      next: (response) => {
        this.sessions = response.data || [];
      },
      error: (error) => {
        console.error('Erreur lors du chargement des sessions:', error);
      }
    });
  }

  loadTodaysSessions() {
    if (!this.employeeId) return;
    
    this.taskEnhancedService.getTodaySessionsByEmployee(this.employeeId).subscribe({
      next: (response) => {
        this.todayTasksSessions = response.data?.sessions || [];
      },
      error: (error) => {
        console.error('Erreur lors du chargement des sessions d\'aujourd\'hui:', error);
      }
    });
  }

  checkActiveSession() {
    const runningSession = this.sessions.find(s => s.status === 'running');
    if (runningSession) {
      this.activeSession = runningSession;
      this.startTimer();
    }
  }

  startSession() {
    if (this.employeeId == null) {
      alert('Impossible de démarrer le pointage : employé non identifié.');
      return;
    }

    const employeeId = this.employeeId;
    const description = `Pointage ${this.currentTask?.title || 'tâche'}`;

    this.taskEnhancedService.startTimeSession(this.taskId, employeeId, description).subscribe({
      next: (response) => {
        this.activeSession = {
          id: response.data.sessionId,
          task_id: this.taskId,
          employee_id: employeeId,
          start_time: new Date().toISOString(),
          end_time: null,
          duration_seconds: 0,
          status: 'running',
          description,
          employee_name: '',
          task_title: this.currentTask?.title
        };
        this.startTimer();
        if (this.currentTask) {
          this.currentTask.status = 'in_progress';
        }
      },
      error: (error) => {
        console.error('Erreur lors du démarrage de la session:', error);
        const message = error?.error?.message || 'Erreur lors du démarrage du pointage. Veuillez réessayer.';
        alert(message);
      }
    });
  }

  pauseSession() {
    if (this.activeSession) {
      this.taskEnhancedService.pauseTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          this.activeSession!.status = 'paused';
          this.activeSession!.duration_seconds = response.data.duration;
          this.stopTimer();
          this.loadSessions();
        },
        error: (error) => {
          console.error('Erreur lors de la pause:', error);
          alert('Erreur lors de la mise en pause. Veuillez réessayer.');
        }
      });
    }
  }

  resumeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.resumeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          this.activeSession!.status = 'running';
          this.startTimer();
        },
        error: (error) => {
          console.error('Erreur lors de la reprise:', error);
          const message = error?.error?.message || 'Erreur lors de la reprise. Veuillez réessayer.';
          alert(message);
        }
      });
    }
  }

  completeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.completeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          const hours = response.data?.hours || 0;
          alert(`Pointage terminé : ${hours}h\nTâche passée à "Complétée"\nTimesheet créé`);
          
          this.activeSession = null;
          this.stopTimer();
          this.elapsedTime = 0;
          
          if (this.currentTask) {
            this.currentTask.status = 'done';
          }
          
          this.loadSessions();
          this.loadTodaysSessions();
          this.taskCompleted.emit({ taskId: this.taskId, hours });
        },
        error: (error) => {
          console.error('Erreur lors de la fin de session:', error);
          alert('Erreur lors de la fin du pointage. Veuillez réessayer.');
        }
      });
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.activeSession && this.activeSession.status === 'running') {
        this.elapsedTime++;
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  formatDateTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'running': return 'En cours';
      case 'paused': return 'En pause';
      case 'completed': return 'Complétée';
      default: return status;
    }
  }

  getTaskStatusLabel(status: string): string {
    switch (status) {
      case 'todo': return 'À faire';
      case 'in_progress': return 'En cours';
      case 'done': return 'Terminée';
      default: return status;
    }
  }

  getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'high': return 'Élevée';
      case 'medium': return 'Moyenne';
      case 'low': return 'Faible';
      default: return priority;
    }
  }

  get todayTotalSeconds(): number {
    return this.todayTasksSessions.reduce((total, session) => total + session.duration_seconds, 0);
  }

  get todayTotalHours(): number {
    return parseFloat((this.todayTotalSeconds / 3600).toFixed(2));
  }
}

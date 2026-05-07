import { Component, Input, OnInit } from '@angular/core';

interface GanttProject {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: string;
  color: string;
}

interface GanttTask {
  id: string;
  projectId: number;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: string;
  assignee: string;
}

@Component({
  selector: 'app-simple-gantt',
  template: `
    <div class="simple-gantt">
      <div class="gantt-header">
        <h3>Diagramme de Gantt</h3>
        <div class="legend">
          <div class="legend-item">
            <div class="legend-color done"></div>
            <span>Terminé</span>
          </div>
          <div class="legend-item">
            <div class="legend-color progress"></div>
            <span>En cours</span>
          </div>
          <div class="legend-item">
            <div class="legend-color todo"></div>
            <span>À faire</span>
          </div>
        </div>
      </div>
      
      <div class="gantt-content">
        <div *ngIf="projects.length === 0" class="empty-state">
          <p>Aucun projet à afficher</p>
        </div>
        
        <div *ngFor="let project of projects" class="project-row">
          <div class="project-info">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-progress">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="project.progress" [style.background]="project.color"></div>
              </div>
              <span class="progress-text">{{ project.progress }}%</span>
            </div>
          </div>
          
          <div class="project-timeline">
            <div class="timeline-bar">
              <div class="project-duration" 
                   [style.background]="project.color"
                   [style.opacity]="0.3">
              </div>
            </div>
            
            <div class="tasks-container">
              <div *ngFor="let task of getProjectTasks(project.id)" 
                   class="task-bar"
                   [ngStyle]="getTaskStyle(task)"
                   [title]="task.name + ' (' + task.progress + '%)'">
                <span class="task-name">{{ task.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .simple-gantt {
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .gantt-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .gantt-header h3 {
      margin: 0;
      color: #374151;
      font-size: 18px;
      font-weight: 600;
    }
    
    .legend {
      display: flex;
      gap: 20px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #6b7280;
    }
    
    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 4px;
    }
    
    .legend-color.done { background: #10b981; }
    .legend-color.progress { background: #f59e0b; }
    .legend-color.todo { background: #6b7280; }
    
    .empty-state {
      text-align: center;
      padding: 40px;
      color: #6b7280;
    }
    
    .project-row {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #f9fafb;
    }
    
    .project-info {
      margin-bottom: 15px;
    }
    
    .project-name {
      font-weight: 600;
      color: #374151;
      margin-bottom: 8px;
      font-size: 16px;
    }
    
    .project-progress {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .progress-bar {
      flex: 1;
      height: 8px;
      background: #e5e7eb;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      transition: width 0.3s ease;
    }
    
    .progress-text {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
      min-width: 40px;
    }
    
    .project-timeline {
      position: relative;
      height: 40px;
      background: #f3f4f6;
      border-radius: 6px;
      overflow: hidden;
    }
    
    .timeline-bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
    }
    
    .project-duration {
      height: 20px;
      border-radius: 4px;
      margin: 0 10px;
    }
    
    .tasks-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    
    .task-bar {
      height: 24px;
      border-radius: 4px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      color: white;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-right: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .task-bar:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .task-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `]
})
export class SimpleGanttComponent implements OnInit {
  @Input() projects: GanttProject[] = [];
  @Input() tasks: GanttTask[] = [];

  ngOnInit() {
    // Si aucune donnée n'est fournie, utiliser des données de démonstration
    if (this.projects.length === 0) {
      this.generateDemoData();
    }
  }

  generateDemoData() {
    this.projects = [
      {
        id: 1,
        name: 'Développement ERP',
        startDate: '2026-05-01',
        endDate: '2026-06-30',
        progress: 65,
        status: 'active',
        color: '#7C74FF'
      },
      {
        id: 2,
        name: 'Site E-commerce',
        startDate: '2026-05-15',
        endDate: '2026-07-15',
        progress: 40,
        status: 'active',
        color: '#10B981'
      },
      {
        id: 3,
        name: 'Application Mobile',
        startDate: '2026-06-01',
        endDate: '2026-08-30',
        progress: 20,
        status: 'active',
        color: '#F59E0B'
      }
    ];

    this.tasks = [
      { id: '1-1', projectId: 1, name: 'Analyse des besoins', startDate: '2026-05-01', endDate: '2026-05-15', progress: 100, status: 'done', assignee: 'Jean Dupont' },
      { id: '1-2', projectId: 1, name: 'Développement Backend', startDate: '2026-05-10', endDate: '2026-06-10', progress: 70, status: 'progress', assignee: 'Marie Martin' },
      { id: '1-3', projectId: 1, name: 'Tests & Validation', startDate: '2026-06-05', endDate: '2026-06-30', progress: 30, status: 'todo', assignee: 'Pierre Bernard' },
      { id: '2-1', projectId: 2, name: 'Maquettage', startDate: '2026-05-15', endDate: '2026-05-30', progress: 100, status: 'done', assignee: 'Sophie Lemaire' },
      { id: '2-2', projectId: 2, name: 'Développement Frontend', startDate: '2026-05-25', endDate: '2026-07-01', progress: 45, status: 'progress', assignee: 'Thomas Robert' },
      { id: '3-1', projectId: 3, name: 'Cahier des charges', startDate: '2026-06-01', endDate: '2026-06-15', progress: 80, status: 'progress', assignee: 'Claire Durand' },
      { id: '3-2', projectId: 3, name: 'Développement iOS', startDate: '2026-06-10', endDate: '2026-08-15', progress: 10, status: 'todo', assignee: 'Nicolas Petit' }
    ];
  }

  getProjectTasks(projectId: number): GanttTask[] {
    return this.tasks.filter(task => task.projectId === projectId);
  }

  getTaskStyle(task: GanttTask) {
    const project = this.projects.find(p => p.id === task.projectId);
    if (!project) return {};

    const projectStart = new Date(project.startDate).getTime();
    const projectEnd = new Date(project.endDate).getTime();
    const taskStart = new Date(task.startDate).getTime();
    const taskEnd = new Date(task.endDate).getTime();

    const projectDuration = projectEnd - projectStart;
    const taskStartOffset = taskStart - projectStart;
    const taskDuration = taskEnd - taskStart;

    const left = (taskStartOffset / projectDuration) * 100;
    const width = (taskDuration / projectDuration) * 100;

    let backgroundColor = '#6b7280'; // todo (gris)
    if (task.status === 'done') backgroundColor = '#10b981'; // vert
    else if (task.status === 'progress') backgroundColor = '#f59e0b'; // orange

    return {
      position: 'absolute',
      left: `${left}%`,
      width: `${width}%`,
      'background-color': backgroundColor,
      'z-index': 1
    };
  }
}

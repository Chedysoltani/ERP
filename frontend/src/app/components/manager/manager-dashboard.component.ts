import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerAuthService, Manager, Project } from '../../services/manager-auth.service';

export type SectionId =
  | 'dashboard' | 'projets' | 'taches' | 'gantt'
  | 'utilisateurs' | 'reunions' | 'documents';

interface DisplayProject {
  id: number;
  name: string;
  description: string;
  progress: number;
  team: number;
  deadline: string;
  status: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  priority?: string;
}

interface CalendarDay {
  number: number;
  isToday: boolean;
  hasMeeting: boolean;
  meetings: { color: string }[];
}

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  assigneeInitials: string;
  avatarColor: string;
  dueDate: string;
  progress: number;
  tags: string[];
  submittedAt?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  activeSection: SectionId = 'dashboard';
  isScrolled = false;
  showCreateProjectModal = false;
  showViewProjectModal = false;
  showEditProjectModal = false;
  showCreateUserModal = false;
  showEditUserModal = false;
  selectedProject: any = null;
  projectToEdit: any = {
    name: '',
    description: '',
    team: '',
    priority: 'medium',
    startDate: '',
    endDate: '',
    budget: 0
  };
  currentManager: Manager | null = null;
  loading = false;

  ngOnInit() {
    this.currentManager = this.managerAuthService.currentManagerValue;
    
    // Vérifier si le manager est connecté
    if (!this.currentManager) {
      this.router.navigate(['/manager-login']);
      return;
    }

    // S'abonner aux changements de manager
    this.managerAuthService.currentManager.subscribe(manager => {
      this.currentManager = manager;
      if (!manager) {
        this.router.navigate(['/manager-login']);
      }
    });

    // Charger les projets depuis la base de données
    this.loadProjectsFromDatabase();
    
    // Charger les tâches depuis la base de données
    this.loadTasksFromDatabase();
    
    // Charger les utilisateurs depuis la base de données
    this.loadUsersFromDatabase();
    
    // Calculer les statistiques
    this.calculateStats();
    
    // Ajouter les propriétés manquantes
    this.meetings = this.meetings.map((m: any) => ({
      ...m,
      color: m.type === 'team' ? '#10B981' : m.type === 'client' ? '#3B82F6' : '#F59E0B'
    }));
    
    this.documents = this.documents.map((d: any) => ({
      ...d,
      title: d.name
    }));
    
    // Initialiser les tâches avec les propriétés manquantes
    this.tasks = this.baseTasks.map((t: any) => ({
      ...t,
      submittedAt: new Date().toISOString()
    }));
    
    this.inProgressTasks = this.inProgressTasks.map((t: any) => ({
      ...t,
      submittedAt: new Date().toISOString()
    }));
    
    this.doneTasks = this.doneTasks.map((t: any) => ({
      ...t,
      completedDate: t.completedDate || new Date().toISOString()
    }));
  }

  loadProjectsFromDatabase() {
    console.log('Début du chargement des projets depuis la base...');
    console.log('Manager connecté:', this.currentManager);
    
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les projets');
      return;
    }

    this.managerAuthService.getManagerProjects().subscribe({
      next: (response: any) => {
        console.log('Réponse complète du backend:', response);
        const projects = response.data || response; // Gérer les deux formats possibles
        console.log('Projets chargés depuis la base:', projects);
        console.log('Nombre de projets:', projects.length);
        
        // Transformer les projets pour l'affichage
        this.recentProjects = projects.map((project: any) => ({
          id: project.id,
          name: project.name,
          description: project.description || '',
          progress: project.progress,
          team: this.getTeamSize(project.team),
          deadline: project.deadline,
          status: project.status,
          startDate: project.startDate,
          endDate: project.endDate,
          budget: project.budget,
          priority: project.priority
        }));
        
        // Mettre à jour les statistiques
        this.globalStats.activeProjects = this.recentProjects.length;
        
        console.log('Projets transformés pour affichage:', this.recentProjects);
        console.log('Statistiques mises à jour:', this.globalStats.activeProjects);
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des projets:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        console.error('Error body:', error.error);
        
        // En cas d'erreur, garder les données locales
        console.log('Fallback: utilisation des données locales');
        console.log('Projets locaux actuels:', this.recentProjects.length);
      }
    });
  }

  loadTasksFromDatabase() {
    console.log('Début du chargement des tâches depuis la base...');
    
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les tâches');
      return;
    }

    // Charger les tâches par statut pour le Kanban
    this.loadTasksByStatus('todo');
    this.loadTasksByStatus('in_progress');
    this.loadTasksByStatus('done');
  }

  loadUsersFromDatabase() {
    console.log('Début du chargement des utilisateurs depuis la base...');
    
    if (!this.currentManager) {
      console.error('Aucun manager connecté pour charger les utilisateurs');
      return;
    }

    this.managerAuthService.getAllUsers().subscribe({
      next: (response: any) => {
        const users = response.data || response;
        console.log('Utilisateurs chargés depuis la base:', users);
        
        // Transformer les utilisateurs pour l'affichage
        this.allUsers = users.map((user: any) => ({
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role,
          telephone: user.telephone,
          avatarColor: this.getAvatarColor(user.id),
          status: user.status || 'active',
          date_creation: user.date_creation || user.created_at,
          last_login: user.last_login,
          name: `${user.prenom} ${user.nom}`,
          initials: `${user.prenom[0]}${user.nom[0]}`,
          phone: user.telephone,
          createdAt: user.date_creation || user.created_at,
          active: (user.status || 'active') === 'active',
          completedTasks: Math.floor(Math.random() * 10),
          ongoingTasks: Math.floor(Math.random() * 5)
        }));
        
        // Mettre à jour les compteurs
        this.managersCount = this.allUsers.filter(u => u.role === 'manager').length;
        this.employeesCount = this.allUsers.filter(u => u.role === 'employee').length;
        this.adminsCount = this.allUsers.filter(u => u.role === 'admin').length;
        
        console.log('Utilisateurs transformés pour affichage:', this.allUsers);
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        // En cas d'erreur, utiliser les données locales
        console.log('Fallback: utilisation des données locales');
      }
    });
  }

  getProjectStatusLabel(status: string): string {
    const labels = {
      'active': 'Actif',
      'completed': 'Terminé',
      'paused': 'En pause',
      'cancelled': 'Annulé'
    };
    return labels[status as keyof typeof labels] || status;
  }

  loadTasksByStatus(status: string) {
    this.managerAuthService.getTasksByStatus(status).subscribe({
      next: (response: any) => {
        const tasks = response.data || response;
        console.log(`Tâches ${status} chargées:`, tasks);
        
        // Transformer les tâches pour l'affichage
        const transformedTasks = tasks.map((task: any) => ({
          id: task.id,
          title: task.title,
          description: task.description,
          priority: task.priority,
          status: task.status,
          assignee: 'Non assigné',
          assigneeInitials: 'NA',
          avatarColor: this.getAvatarColor(task.assignee_id || 0),
          dueDate: task.due_date ? new Date(task.due_date).toLocaleDateString('fr-FR') : 'Non définie',
          progress: task.progress || 0,
          tags: task.tags ? JSON.parse(task.tags) : [],
          project: 'Non assigné',
          submittedAt: task.created_at,
          actualHours: task.actual_hours || 0,
          estimatedHours: task.estimated_hours || 0
        }));

        // Mettre à jour le tableau correspondant
        switch(status) {
          case 'todo':
            this.todoTasks = transformedTasks;
            break;
          case 'in_progress':
            this.inProgressTasks = transformedTasks;
            break;
          case 'done':
            this.doneTasks = transformedTasks;
            break;
        }
      },
      error: (error: any) => {
        console.error(`Erreur lors du chargement des tâches ${status}:`, error);
        // En cas d'erreur, utiliser les données mockées
        this.loadMockTasksForStatus(status);
      }
    });
  }

  loadMockTasksForStatus(status: string) {
    console.log(`Chargement des tâches mockées pour le statut: ${status}`);
    switch(status) {
      case 'todo':
        this.todoTasks = this.baseTasks;
        break;
      case 'in_progress':
        this.inProgressTasks = this.inProgressTasks;
        break;
      case 'done':
        this.doneTasks = this.doneTasks;
        break;
    }
  }

  getAvatarColor(userId: number): string {
    const colors = ['purple', 'teal', 'amber', 'rose', 'blue', 'green'];
    return colors[userId % colors.length];
  }

  // Formulaire de création de projet
  newProject = {
    name: '',
    description: '',
    team: '',
    priority: 'medium',
    startDate: '',
    endDate: '',
    budget: 0
  };

  // Données pour le dashboard
  globalStats = {
    totalEmployees: 156,
    activeProjects: 24,
    completedTasks: 892,
    pendingApprovals: 47
  };

  recentProjects: DisplayProject[] = [
    {
      id: 1,
      name: 'Formation Angular Avancé',
      progress: 75,
      team: 8,
      deadline: '2024-03-25',
      status: 'active',
      description: 'Formation interne sur Angular avancé'
    },
    {
      id: 2,
      name: 'Migration Cloud Infrastructure',
      progress: 45,
      team: 12,
      deadline: '2024-04-15',
      status: 'active',
      description: 'Migration de l\'infrastructure vers le cloud'
    },
    {
      id: 3,
      name: 'E-learning Platform V2',
      progress: 90,
      team: 6,
      deadline: '2024-03-20',
      status: 'active',
      description: 'Refonte complète de la plateforme e-learning'
    }
  ];

  baseTasks = [
    {
      id: 1,
      title: 'Dashboard design review',
      description: 'Revoir l\'interface du dashboard',
      priority: 'high',
      assignee: 'Jean Dupont',
      assigneeInitials: 'JD',
      avatarColor: 'purple',
      dueDate: '17 Mars',
      progress: 85,
      tags: ['design', 'review']
    },
    {
      id: 2,
      title: 'API endpoints',
      description: 'Créer les routes RESTful',
      priority: 'high',
      assignee: 'Marie Martin',
      assigneeInitials: 'MM',
      avatarColor: 'teal',
      dueDate: '18 Mars',
      progress: 70,
      tags: ['backend', 'api']
    },
    {
      id: 3,
      title: 'Database schema',
      description: 'Définir les schéma de la base de données',
      priority: 'medium',
      assignee: 'Pierre Bernard',
      assigneeInitials: 'PB',
      avatarColor: 'amber',
      dueDate: '20 Mars',
      progress: 60,
      tags: ['database', 'schema']
    }
  ];

  tasks: Task[] = [];

  inProgressTasks = [
    {
      id: 5,
      title: 'Refactor dashboard manager',
      description: 'Améliorer l\'architecture du dashboard',
      priority: 'high',
      assignee: 'Jean Dupont',
      assigneeInitials: 'JD',
      avatarColor: 'purple',
      dueDate: '18 Mars',
      progress: 65,
      tags: ['frontend', 'refactoring']
    },
    {
      id: 6,
      title: 'Implémenter authentification',
      description: 'Ajouter JWT et refresh tokens',
      priority: 'high',
      assignee: 'Marie Martin',
      assigneeInitials: 'MM',
      avatarColor: 'teal',
      dueDate: '19 Mars',
      progress: 40,
      tags: ['security', 'backend']
    },
    {
      id: 7,
      title: 'Design system',
      description: 'Créer des composants réutilisables',
      priority: 'medium',
      assignee: 'Sophie Laurent',
      assigneeInitials: 'SL',
      avatarColor: 'rose',
      dueDate: '21 Mars',
      progress: 80,
      tags: ['design', 'frontend']
    }
  ];

  doneTasks = [
    {
      id: 8,
      title: 'Setup projet initial',
      description: 'Configuration Angular et Node.js',
      priority: 'high',
      assignee: 'Jean Dupont',
      assigneeInitials: 'JD',
      avatarColor: 'purple',
      completedDate: '15 Mars',
      tags: ['setup', 'infrastructure']
    },
    {
      id: 9,
      title: 'Base de données',
      description: 'Création des tables et relations',
      priority: 'high',
      assignee: 'Pierre Bernard',
      assigneeInitials: 'PB',
      avatarColor: 'amber',
      completedDate: '14 Mars',
      tags: ['database', 'mysql']
    },
    {
      id: 10,
      title: 'CI/CD Pipeline',
      description: 'Configuration GitHub Actions',
      priority: 'medium',
      assignee: 'Marie Martin',
      assigneeInitials: 'MM',
      avatarColor: 'teal',
      completedDate: '16 Mars',
      tags: ['devops', 'automation']
    },
    {
      id: 11,
      title: 'UI/UX Research',
      description: 'Analyse des besoins utilisateurs',
      priority: 'medium',
      assignee: 'Sophie Laurent',
      assigneeInitials: 'SL',
      avatarColor: 'rose',
      completedDate: '13 Mars',
      tags: ['research', 'ux']
    },
    {
      id: 12,
      title: 'Architecture review',
      description: 'Validation de l\'architecture technique',
      priority: 'low',
      assignee: 'Jean Dupont',
      assigneeInitials: 'JD',
      avatarColor: 'purple',
      completedDate: '12 Mars',
      tags: ['architecture', 'planning']
    }
  ];

  users = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@sit.com',
      role: 'manager',
      telephone: '06 12 34 56 78',
      avatarColor: 'purple',
      status: 'active',
      date_creation: '2024-01-15T10:00:00Z',
      last_login: '2024-03-23T14:30:00Z'
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Marie',
      email: 'marie.martin@sit.com',
      role: 'manager',
      telephone: '06 23 45 67 89',
      avatarColor: 'teal',
      status: 'active',
      date_creation: '2024-01-20T09:00:00Z',
      last_login: '2024-03-23T15:45:00Z'
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Pierre',
      email: 'pierre.bernard@sit.com',
      role: 'manager',
      telephone: '06 34 56 78 90',
      avatarColor: 'amber',
      status: 'active',
      date_creation: '2024-01-22T11:00:00Z',
      last_login: '2024-03-23T16:20:00Z'
    }
  ];

  meetings: any[] = [
    {
      id: 1,
      title: 'Réunion d\'équipe',
      date: '2024-03-25T10:00:00Z',
      duration: '1h',
      location: 'Salle A',
      participants: 8,
      type: 'team',
      agenda: [
        'Revue des projets en cours',
        'Point sur les blocages',
        'Questions et discussion libre'
      ],
      status: 'upcoming',
      notes: 'Préparer les rapports d\'avancement'
    },
    {
      id: 2,
      title: 'Reunion avec le client',
      date: '2024-03-26T14:00:00Z',
      duration: '2h',
      location: 'Visioconférence',
      participants: 4,
      type: 'client',
      agenda: [
        'Démonstration de la v2',
        'Feedback et retours client',
        'Prochaines étapes'
      ],
      status: 'scheduled',
      notes: 'Préparer la démo'
    },
    {
      id: 3,
      title: 'Point technique',
      date: '2024-03-27T16:00:00Z',
      duration: '30min',
      location: 'Visioconférence',
      participants: 2,
      type: 'technical',
      agenda: [
        'Architecture review',
        'Performance optimisation',
        'Décisions techniques'
      ],
      status: 'pending',
      notes: 'Revoir les performances'
    }
  ];

  documents: any[] = [
    {
      id: 1,
      name: 'Cahier des exigences',
      type: 'pdf',
      size: '2.4 MB',
      modified: '2024-03-23',
      modifiedBy: 'Jean Dupont',
      tags: ['specification', 'requirements']
    },
    {
      id: 2,
      name: 'API Documentation',
      type: 'markdown',
      size: '1.1 MB',
      modified: '2024-03-23',
      modifiedBy: 'Marie Martin',
      tags: ['api', 'documentation']
    },
    {
      id: 3,
      name: 'Guide d\'installation',
      type: 'pdf',
      size: '856 KB',
      modified: '2024-03-23',
      modifiedBy: 'Pierre Bernard',
      tags: ['guide', 'setup']
    },
    {
      id: 4,
      name: 'Rapport mensuel Mars',
      type: 'xlsx',
      size: '4.2 MB',
      modified: '2024-03-23',
      modifiedBy: 'Jean Dupont',
      tags: ['rapport', 'mensuel']
    },
    {
      id: 5,
      name: 'Présentation projet',
      type: 'pptx',
      size: '3.8 MB',
      modified: '2024-03-23',
      modifiedBy: 'Sophie Laurent',
      tags: ['présentation', 'demo']
    }
  ];

  constructor(
    private managerAuthService: ManagerAuthService,
    private router: Router
  ) {}

  timesheets = [
    {
      id: 1,
      user: 'Jean Dupont',
      date: '2024-03-23',
      entryTime: '09:00',
      exitTime: '18:00',
      totalHours: 8,
      tasks: [
        { task: 'Développement dashboard', duration: 4 },
        { task: 'Réunion équipe', duration: 1 },
        { task: 'Review code', duration: 1 },
        { task: 'Documentation', duration: 2 }
      ],
      status: 'validated',
      project: 'Dashboard Manager'
    },
    {
      id: 2,
      user: 'Marie Martin',
      date: '2024-03-23',
      entryTime: '08:30',
      exitTime: '17:30',
      totalHours: 9,
      tasks: [
        { task: 'Formation Angular', duration: 3 },
        { task: 'API REST', duration: 3 },
        { task: 'Tests unitaires', duration: 2 },
        { task: 'Déploiement', duration: 1 }
      ],
      status: 'validated',
      project: 'Formation Angular Avancé'
    },
    {
      id: 3,
      user: 'Pierre Bernard',
      date: '2024-03-23',
      entryTime: '09:00',
      exitTime: '19:00',
      totalHours: 10,
      tasks: [
        { task: 'Migration Cloud', duration: 6 },
        { task: 'Tests', duration: 2 },
        { task: 'Documentation', duration: 2 }
      ],
      status: 'validated',
      project: 'Migration Cloud Infrastructure'
    }
  ];

  navItems = [
    { id: 'dashboard',    label: 'Dashboard',    icon: 'bi-speedometer2',   group: 'principal', badge: null },
    { id: 'projets',      label: 'Projets',      icon: 'bi-kanban',         group: 'principal', badge: null },
    { id: 'taches',       label: 'Tâches',       icon: 'bi-check2-square',  group: 'principal', badge: '12' },
    { id: 'gantt',        label: 'Gantt',        icon: 'bi-calendar3-range',group: 'principal', badge: null },
    { id: 'utilisateurs', label: 'Utilisateurs', icon: 'bi-people',         group: 'equipe',    badge: null },
    { id: 'reunions',     label: 'Réunions',     icon: 'bi-camera-video',   group: 'equipe',    badge: '3'  },
    { id: 'documents',  label: 'Documents',  icon: 'bi-folder2-open',   group: 'ressources',badge: null },
  ];

  topbarTitles: Record<SectionId, { title: string; sub: string }> = {
    dashboard:    { title: 'Dashboard',      sub: 'Vue d\'ensemble' },
    projets:      { title: 'Projets',        sub: 'Gestion des projets' },
    taches:       { title: 'Tâches',         sub: 'Kanban — To Do / In Progress / Done' },
    gantt:        { title: 'Gantt',          sub: 'Planification des projets' },
    utilisateurs: { title: 'Utilisateurs',   sub: 'Gestion des rôles & permissions' },
    reunions:     { title: 'Réunions',       sub: 'Planification & notes' },
    documents:  { title: 'Documents',      sub: 'Gestion des fichiers' },
  };

  get currentTitle() { return this.topbarTitles[this.activeSection]; }
  get principalItems() { return this.navItems.filter(n => n.group === 'principal'); }
  get equipeItems()    { return this.navItems.filter(n => n.group === 'equipe'); }
  get ressourcesItems(){ return this.navItems.filter(n => n.group === 'ressources'); }

  navigate(id: string) { this.activeSection = id as SectionId; }

  @HostListener('window:scroll', [])
  onScroll() { this.isScrolled = window.scrollY > 40; }

  // Helper method for event propagation
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  // Méthodes pour le dashboard
  getStatusColor(status: string): string {
    const colors = {
      'active': '#10B981',
      'completed': '#3B82F6',
      'pending': '#F59E0B'
    };
    return colors[status as keyof typeof colors] || '#6B7280';
  }

  getPriorityColor(priority: string): string {
    const colors = {
      'low': '#10B981',
      'medium': '#F59E0B',
      'high': '#EF4444'
    };
    return colors[priority as keyof typeof colors] || '#6B7280';
  }

  getTeamSize(teamName: string): number {
    switch(teamName) {
      case 'Équipe A': return 8;
      case 'Équipe B': return 12;
      case 'Équipe C': return 6;
      default: return 5;
    }
  }

  getStatusLabel(status: string): string {
    const labels = {
      'active': 'Actif',
      'completed': 'Terminé',
      'paused': 'En pause',
      'cancelled': 'Annulé'
    };
    return labels[status as keyof typeof labels] || status;
  }

  getPriorityLabel(priority: string): string {
    const labels = {
      'low': 'Basse',
      'medium': 'Moyenne',
      'high': 'Haute'
    };
    return labels[priority as keyof typeof labels] || priority;
  }

  getRoleIcon(role: string): string {
    const icons = {
      'manager': 'bi-person-badge',
      'admin': 'bi-shield-check',
      'employee': 'bi-person'
    };
    return icons[role as keyof typeof icons] || 'bi-person';
  }

  getDocumentIcon(type: string): string {
    const icons = {
      'pdf': 'bi-file-pdf',
      'docx': 'bi-file-word',
      'xlsx': 'bi-file-excel',
      'pptx': 'bi-file-ppt',
      'markdown': 'bi-file-code',
      'txt': 'bi-file-text'
    };
    return icons[type as keyof typeof icons] || 'bi-file';
  }

  getEfficiencyColor(efficiency: number): string {
    if (efficiency >= 80) return '#10B981';
    if (efficiency >= 60) return '#F59E0B';
    return '#EF4444';
  }

  approveTask(taskId: number) {
    console.log('Approuver tâche:', taskId);
    
    this.managerAuthService.approveTask(taskId).subscribe({
      next: (response: any) => {
        console.log('Tâche approuvée:', response);
        alert('Tâche approuvée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'approbation de la tâche:', error);
        alert('Erreur lors de l\'approbation de la tâche');
      }
    });
  }

  rejectTask(taskId: number) {
    console.log('Rejeter tâche:', taskId);
    
    this.managerAuthService.rejectTask(taskId).subscribe({
      next: (response: any) => {
        console.log('Tâche rejetée:', response);
        alert('Tâche rejetée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors du rejet de la tâche:', error);
        alert('Erreur lors du rejet de la tâche');
      }
    });
  }

  // Méthodes pour le drag and drop
  draggedTask: any = null;
  draggedOverColumn: string = '';

  onDragStart(task: any, event: DragEvent) {
    this.draggedTask = task;
    event.dataTransfer!.effectAllowed = 'move';
    console.log('Drag started for task:', task.title);
  }

  onDragEnd(event: DragEvent) {
    this.draggedTask = null;
    this.draggedOverColumn = '';
    console.log('Drag ended');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    // Gérer le visuel si nécessaire
  }

  onDrop(event: DragEvent, targetStatus: string) {
    event.preventDefault();
    
    if (!this.draggedTask) {
      return;
    }

    console.log('Dropping task:', this.draggedTask.title, 'to column:', targetStatus);

    // Si on déplace vers la même colonne, ne rien faire
    if (this.draggedTask.status === targetStatus) {
      return;
    }

    // Mettre à jour le statut de la tâche
    this.updateTaskStatus(this.draggedTask.id, targetStatus);
  }

  // Formulaire d'édition de tâche
  taskToEdit: any = {};
  showEditTaskModal = false;

  editTask(task: any) {
    console.log('Modification de la tâche:', task);
    this.taskToEdit = { ...task };
    this.showEditTaskModal = true;
  }

  closeEditTaskModal() {
    this.showEditTaskModal = false;
    this.taskToEdit = {};
  }

  submitTaskEdit() {
    if (!this.taskToEdit.title) {
      alert('Le titre de la tâche est obligatoire');
      return;
    }

    // Convertir la date au format YYYY-MM-DD pour MySQL
    let formattedDueDate = this.taskToEdit.due_date;
    if (formattedDueDate && formattedDueDate.includes('/')) {
      const dateParts = formattedDueDate.split('/');
      if (dateParts.length === 3) {
        formattedDueDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      }
    }

    const taskData = {
      title: this.taskToEdit.title,
      description: this.taskToEdit.description || null,
      priority: this.taskToEdit.priority || 'medium',
      assignee_id: this.taskToEdit.assignee_id || null,
      project_id: this.taskToEdit.project_id || null,
      due_date: formattedDueDate || null,
      estimated_hours: this.taskToEdit.estimated_hours || null,
      tags: this.taskToEdit.tags && this.taskToEdit.tags.length > 0 ? JSON.stringify(this.taskToEdit.tags) : null
    };

    console.log('Mise à jour de la tâche:', taskData);
    
    this.managerAuthService.updateTask(this.taskToEdit.id, taskData).subscribe({
      next: (response: any) => {
        console.log('Tâche mise à jour:', response);
        alert('Tâche mise à jour avec succès');
        this.closeEditTaskModal();
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de la tâche:', error);
        alert('Erreur lors de la mise à jour de la tâche');
      }
    });
  }

  // Méthodes pour la gestion des tâches
  createTask(taskData: any) {
    console.log('Création de la tâche:', taskData);
    
    this.managerAuthService.createTask(taskData).subscribe({
      next: (response: any) => {
        console.log('Tâche créée:', response);
        alert('Tâche créée avec succès');
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de la tâche:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à créer cette tâche.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la création de la tâche: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }

  updateTaskStatus(taskId: number, newStatus: string) {
    console.log('Mise à jour du statut de la tâche:', taskId, newStatus);
    console.log('Tâche complète:', this.draggedTask);
    
    // Vérifier si la tâche a les propriétés nécessaires
    if (!this.draggedTask || !this.draggedTask.id) {
      console.error('Tâche invalide ou ID manquant:', this.draggedTask);
      alert('Erreur: Tâche invalide');
      return;
    }
    
    this.managerAuthService.updateTaskStatus(this.draggedTask.id, newStatus).subscribe({
      next: (response: any) => {
        console.log('Statut de la tâche mis à jour:', response);
        // Recharger les tâches
        this.loadTasksFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du statut:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides pour la mise à jour du statut.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à modifier cette tâche.');
        } else if (error.status === 404) {
          alert('Erreur: Tâche non trouvée.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la mise à jour du statut: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }

  deleteTask(taskId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      console.log('Suppression de la tâche:', taskId);
      
      this.managerAuthService.deleteTask(taskId).subscribe({
        next: (response: any) => {
          console.log('Tâche supprimée:', response);
          alert('Tâche supprimée avec succès');
          // Recharger les tâches
          this.loadTasksFromDatabase();
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression de la tâche:', error);
          alert('Erreur lors de la suppression de la tâche');
        }
      });
    }
  }

  // Formulaire de création de tâche
  newTask = {
    title: '',
    description: '',
    priority: 'medium',
    assignee_id: null,
    project_id: null,
    due_date: '',
    estimated_hours: 0,
    tags: []
  };

  // Formulaire de création d'utilisateur
  newUser = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: '',
    telephone: ''
  };

  // Formulaire d'édition d'utilisateur
  userToEdit: any = {};

  showCreateTaskModal = false;

  openCreateTaskModal() {
    this.showCreateTaskModal = true;
  }

  closeCreateTaskModal() {
    this.showCreateTaskModal = false;
    this.resetTaskForm();
  }

  // Méthodes pour le modal de création d'utilisateur
  openCreateUserModal() {
    this.showCreateUserModal = true;
  }

  closeCreateUserModal() {
    this.showCreateUserModal = false;
    this.resetUserForm();
  }

  resetUserForm() {
    this.newUser = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      role: '',
      telephone: ''
    };
  }

  submitUser() {
    if (!this.newUser.nom || !this.newUser.prenom || !this.newUser.email || !this.newUser.password || !this.newUser.role) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    console.log('Création de l\'utilisateur:', this.newUser);
    
    this.managerAuthService.createUser(this.newUser).subscribe({
      next: (response: any) => {
        console.log('Utilisateur créé:', response);
        alert('Utilisateur créé avec succès');
        this.closeCreateUserModal();
        // Recharger la liste des utilisateurs
        this.loadUsersFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à créer des utilisateurs.');
        } else if (error.status === 409) {
          alert('Erreur: Cet email est déjà utilisé.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la création de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }

  // Méthodes pour l'édition d'utilisateur
  editUser(user: any) {
    console.log('Modification de l\'utilisateur:', user);
    this.userToEdit = { ...user };
    this.showEditUserModal = true;
  }

  closeEditUserModal() {
    this.showEditUserModal = false;
    this.userToEdit = {};
  }

  submitUserEdit() {
    if (!this.userToEdit.nom || !this.userToEdit.prenom || !this.userToEdit.email || !this.userToEdit.role) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    console.log('Mise à jour de l\'utilisateur:', this.userToEdit);
    
    this.managerAuthService.updateUser(this.userToEdit.id, this.userToEdit).subscribe({
      next: (response: any) => {
        console.log('Utilisateur mis à jour:', response);
        alert('Utilisateur mis à jour avec succès');
        this.closeEditUserModal();
        // Recharger la liste des utilisateurs
        this.loadUsersFromDatabase();
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
        console.error('Status:', error.status);
        console.error('Message:', error.message);
        
        // Gérer les erreurs spécifiques
        if (error.status === 400) {
          alert('Erreur: Données invalides. Vérifiez les champs obligatoires.');
        } else if (error.status === 401) {
          alert('Erreur: Vous n\'êtes pas autorisé à modifier cet utilisateur.');
        } else if (error.status === 404) {
          alert('Erreur: Utilisateur non trouvé.');
        } else if (error.status === 409) {
          alert('Erreur: Cet email est déjà utilisé.');
        } else if (error.status === 500) {
          alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
        } else {
          alert('Erreur lors de la mise à jour de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
        }
      }
    });
  }

  // Méthode pour la suppression d'utilisateur
  deleteUser(userId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.')) {
      console.log('Suppression de l\'utilisateur:', userId);
      
      this.managerAuthService.deleteUser(userId).subscribe({
        next: (response: any) => {
          console.log('Utilisateur supprimé:', response);
          alert('Utilisateur supprimé avec succès');
          // Recharger la liste des utilisateurs
          this.loadUsersFromDatabase();
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error);
          console.error('Status:', error.status);
          console.error('Message:', error.message);
          
          // Gérer les erreurs spécifiques
          if (error.status === 401) {
            alert('Erreur: Vous n\'êtes pas autorisé à supprimer cet utilisateur.');
          } else if (error.status === 404) {
            alert('Erreur: Utilisateur non trouvé.');
          } else if (error.status === 500) {
            alert('Erreur: Problème serveur. Veuillez réessayer plus tard.');
          } else {
            alert('Erreur lors de la suppression de l\'utilisateur: ' + (error.message || 'Erreur inconnue'));
          }
        }
      });
    }
  }

  resetTaskForm() {
    this.newTask = {
      title: '',
      description: '',
      priority: 'medium',
      assignee_id: null,
      project_id: null,
      due_date: '',
      estimated_hours: 0,
      tags: []
    };
  }

  submitTask() {
    if (!this.newTask.title) {
      alert('Le titre de la tâche est obligatoire');
      return;
    }

    const taskData = {
      ...this.newTask,
      creator_id: this.currentManager?.id, // Ajouter le creator_id
      assignee_id: this.newTask.assignee_id || null,
      project_id: this.newTask.project_id || null,
      due_date: this.newTask.due_date || null,
      estimated_hours: this.newTask.estimated_hours || null,
      tags: this.newTask.tags.length > 0 ? JSON.stringify(this.newTask.tags) : null
    };

    console.log('Données de la tâche à créer:', taskData);
    this.createTask(taskData);
    this.closeCreateTaskModal();
  }

  // Propriétés pour les statistiques
  totalHours = 0;
  avgHoursPerDay = 0;
  workedDays = 0;
  upcomingMeetings: any[] = [];
  weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  calendarDays: CalendarDay[] = [];
  
  // Propriétés manquantes
  pendingTasks = this.tasks;
  todoTasks = this.tasks;
  allUsers = this.users.map(u => ({
    ...u,
    name: `${u.prenom} ${u.nom}`,
    initials: `${u.prenom[0]}${u.nom[0]}`,
    phone: u.telephone,
    createdAt: u.date_creation,
    active: u.status === 'active',
    completedTasks: Math.floor(Math.random() * 10),
    ongoingTasks: Math.floor(Math.random() * 5)
  }));
  managersCount = this.users.filter(u => u.role === 'manager').length;
  employeesCount = this.users.filter(u => u.role === 'employee').length;
  adminsCount = this.users.filter(u => u.role === 'admin').length;
  teamPerformance = this.users.map(u => ({
    ...u,
    efficiency: 85,
    name: `${u.prenom} ${u.nom}`,
    completedTasks: Math.floor(Math.random() * 10),
    ongoingTasks: Math.floor(Math.random() * 5)
  }));

  // Méthodes pour calculer les statistiques
  calculateStats() {
    this.totalHours = this.timesheets.reduce((sum, entry) => sum + entry.totalHours, 0);
    this.avgHoursPerDay = this.totalHours / this.workedDays || 0;
    this.upcomingMeetings = this.meetings.filter(m => m.status === 'upcoming' || m.status === 'scheduled');
    this.calendarDays = Array.from({length: 31 }, (_, i) => ({
      number: i + 1,
      isToday: i + 1 === new Date().getDate(),
      hasMeeting: false,
      meetings: []
    }));
    
    this.todoTasks = this.baseTasks;
    this.inProgressTasks = this.inProgressTasks;
    this.doneTasks = this.doneTasks;
  }

  // Méthodes pour la création de projet
  openCreateProjectModal() {
    this.showCreateProjectModal = true;
  }

  closeCreateProjectModal() {
    this.showCreateProjectModal = false;
    this.resetProjectForm();
  }

  resetProjectForm() {
    this.newProject = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
  }

  testClick() {
    alert('Test click fonctionne !');
  }

  createProject() {
    alert('Bouton cliqué !');
    console.log('createProject appelé');
    console.log('newProject:', this.newProject);
    console.log('loading:', this.loading);
    
    if (!this.newProject.name || !this.newProject.team) {
      alert('Champs obligatoires manquants: name=' + this.newProject.name + ', team=' + this.newProject.team);
      return;
    }

    alert('Validation OK, tentative de création...');
    this.loading = true;

    // Appeler le backend pour créer le projet
    this.managerAuthService.createProject({
      name: this.newProject.name,
      description: this.newProject.description,
      team: this.newProject.team,
      priority: this.newProject.priority,
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate,
      budget: this.newProject.budget
    }).subscribe({
      next: (createdProject: any) => {
        console.log('Projet créé dans la base:', createdProject);
        
        // Ajouter le projet à la liste locale (pour l'affichage immédiat)
        const displayProject = {
          id: createdProject.data.id ? createdProject.data.id : this.recentProjects.length + 1,
          name: createdProject.data.name,
          description: createdProject.data.description || '',
          progress: createdProject.data.progress || 0,
          team: this.getTeamSize(createdProject.data.team),
          priority: createdProject.data.priority,
          startDate: createdProject.data.startDate || null,
          endDate: createdProject.data.endDate || null,
          budget: createdProject.data.budget,
          deadline: createdProject.data.deadline || null,
          status: createdProject.data.status
        };
        this.recentProjects.unshift(displayProject);

        // Mettre à jour les statistiques
        this.globalStats.activeProjects++;

        // Fermer le modal et réinitialiser le formulaire
        this.closeCreateProjectModal();
        this.loading = false;
        
        alert('Projet créé avec succès dans la base de données !');
      },
      error: (error: any) => {
        console.error('Erreur lors de la création du projet:', error);
        this.loading = false;
        
        // En cas d'erreur backend, fallback sur la création locale
        console.log('Fallback: création locale du projet');
        this.createProjectLocally();
      }
    });
  }

  // Méthode de fallback pour création locale
  createProjectLocally() {
    const newProject = {
      id: this.recentProjects.length + 1,
      name: this.newProject.name,
      description: this.newProject.description,
      progress: 0,
      team: this.getTeamSize(this.newProject.team),
      priority: this.newProject.priority,
      startDate: this.newProject.startDate,
      endDate: this.newProject.endDate,
      budget: this.newProject.budget,
      deadline: this.newProject.endDate || 'À définir',
      status: 'active'
    };

    this.recentProjects.unshift(newProject);
    this.globalStats.activeProjects++;
    this.closeCreateProjectModal();
    
    console.log('Projet créé localement:', newProject);
  }

  // Déconnexion
  logout() {
    this.managerAuthService.logout();
    this.router.navigate(['/manager-login']);
  }

  // Actions sur les projets
  viewProject(project: any) {
    console.log('Voir le projet:', project);
    this.selectedProject = project;
    this.showViewProjectModal = true;
  }

  editProject(project: any) {
    console.log('Modifier le projet:', project);
    this.selectedProject = project;
    this.projectToEdit = {
      name: project.name,
      description: project.description,
      team: project.team,
      priority: project.priority,
      startDate: project.startDate,
      endDate: project.endDate,
      budget: project.budget
    };
    this.showEditProjectModal = true;
  }

  updateProject() {
    console.log('Mise à jour du projet:', this.projectToEdit);
    
    if (!this.projectToEdit.name || !this.projectToEdit.team) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    this.loading = true;

    // Convertir undefined en null pour MySQL
    const projectData = {
      name: this.projectToEdit.name,
      description: this.projectToEdit.description || null,
      team: this.projectToEdit.team,
      priority: this.projectToEdit.priority || 'medium',
      startDate: this.projectToEdit.startDate || null,
      endDate: this.projectToEdit.endDate || null,
      budget: this.projectToEdit.budget || null,
      deadline: this.projectToEdit.endDate || null,
      status: 'active',
      progress: 0
    };

    // Appeler le backend pour mettre à jour le projet
    this.managerAuthService.updateProject(this.selectedProject.id, projectData).subscribe({
      next: (updatedProject: any) => {
        console.log('Projet mis à jour dans la base:', updatedProject);
        
        // Mettre à jour le projet dans la liste locale
        const index = this.recentProjects.findIndex(p => p.id === this.selectedProject.id);
        if (index !== -1) {
          this.recentProjects[index] = {
            id: updatedProject.id,
            name: updatedProject.name,
            description: updatedProject.description || '',
            progress: updatedProject.progress,
            team: this.getTeamSize(updatedProject.team),
            deadline: updatedProject.deadline,
            status: updatedProject.status,
            startDate: updatedProject.startDate,
            endDate: updatedProject.endDate,
            budget: updatedProject.budget,
            priority: updatedProject.priority
          };
        }
        
        this.loading = false;
        this.closeEditProjectModal();
        
        alert('Projet mis à jour avec succès !');
      },
      error: (error: any) => {
        console.error('Erreur lors de la mise à jour du projet:', error);
        this.loading = false;
        alert('Erreur lors de la mise à jour du projet');
      }
    });
  }

  deleteProject(project: any) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le projet "${project.name}" ?`)) {
      console.log('Supprimer le projet:', project);
      // TODO: Implémenter la suppression
      alert(`Suppression du projet: ${project.name}\n\nFonctionnalité à implémenter`);
    }
  }

  // Méthodes pour les modaux
  closeViewProjectModal() {
    this.showViewProjectModal = false;
    this.selectedProject = null;
  }

  closeEditProjectModal() {
    this.showEditProjectModal = false;
    this.selectedProject = null;
    this.projectToEdit = {
      name: '',
      description: '',
      team: '',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: 0
    };
  }
}

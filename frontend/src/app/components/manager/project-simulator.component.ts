import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { IARecommendationService } from '../../services/ia-recommendation.service';
import { 
  ProjectSimulation, 
  TaskWithRequirements, 
  TaskRequirement 
} from '../../models/skills.model';

@Component({
  selector: 'app-project-simulator',
  templateUrl: './project-simulator.component.html',
  styleUrls: ['./project-simulator.component.css']
})
export class ProjectSimulatorComponent implements OnInit {
  projectForm!: FormGroup;
  simulationResult: any = null;
  loading: boolean = false;
  showResults: boolean = false;
  
  availableEmployees = [
    { id: 1, name: 'Jean Dupont', role: 'Développeur Senior' },
    { id: 2, name: 'Marie Martin', role: 'Développeur Frontend' },
    { id: 3, name: 'Pierre Durand', role: 'Développeur Backend' },
    { id: 4, name: 'Sophie Lefebvre', role: 'Designer UX' },
    { id: 5, name: 'Thomas Bernard', role: 'DevOps' }
  ];
  
  // Options pour les compétences
  availableSkills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'React', 'Angular', 
    'Vue.js', 'Node.js', 'Docker', 'Kubernetes', 'MySQL', 
    'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Git', 'UI/UX Design'
  ];
  
  constructor(
    private fb: FormBuilder,
    private iaService: IARecommendationService
  ) {
    this.initializeForm();
  }

  ngOnInit() {}

  private initializeForm() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: [30, [Validators.required, Validators.min(1), Validators.max(365)]],
      objectives: this.fb.array([]),
      availableEmployees: [[], Validators.required],
      tasks: this.fb.array([])
    });
  }

  get objectivesArray(): FormArray {
    return this.projectForm.get('objectives') as FormArray;
  }

  get tasksArray(): FormArray {
    return this.projectForm.get('tasks') as FormArray;
  }

  addObjective() {
    const objectiveGroup = this.fb.group({
      description: ['', Validators.required]
    });
    this.objectivesArray.push(objectiveGroup);
  }

  removeObjective(index: number) {
    this.objectivesArray.removeAt(index);
  }

  addTask() {
    const taskGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      estimatedHours: [8, [Validators.required, Validators.min(1)]],
      priority: ['medium', Validators.required],
      requirements: this.fb.array([])
    });
    
    this.tasksArray.push(taskGroup);
  }

  removeTask(index: number) {
    this.tasksArray.removeAt(index);
  }

  getTaskRequirements(taskIndex: number): FormArray {
    return this.tasksArray.at(taskIndex).get('requirements') as FormArray;
  }

  addTaskRequirement(taskIndex: number) {
    const requirementGroup = this.fb.group({
      skillName: ['', Validators.required],
      requiredLevel: [3, [Validators.required, Validators.min(1), Validators.max(5)]],
      importance: ['medium', Validators.required]
    });
    
    this.getTaskRequirements(taskIndex).push(requirementGroup);
  }

  removeTaskRequirement(taskIndex: number, requirementIndex: number) {
    this.getTaskRequirements(taskIndex).removeAt(requirementIndex);
  }

  simulateProject() {
    if (this.projectForm.invalid || this.tasksArray.length === 0) {
      alert('Veuillez remplir tous les champs obligatoires et ajouter au moins une tâche');
      return;
    }

    this.loading = true;
    
    const projectData: ProjectSimulation = {
      id: Date.now(),
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
      duration: this.projectForm.value.duration,
      objectives: this.projectForm.value.objectives.map((obj: any) => obj.description),
      availableEmployees: this.projectForm.value.availableEmployees,
      tasks: this.formatTasks(this.projectForm.value.tasks),
      generatedPlan: null as any
    };

    this.iaService.simulateProject(projectData).subscribe({
      next: (result) => {
        this.simulationResult = result;
        this.showResults = true;
        this.loading = false;
        console.log('Simulation terminée:', result);
      },
      error: (error) => {
        console.error('Erreur lors de la simulation:', error);
        this.loading = false;
        alert('Erreur lors de la simulation du projet');
      }
    });
  }

  private formatTasks(tasks: any[]): TaskWithRequirements[] {
    return tasks.map((task, index) => ({
      id: index + 1,
      title: task.title,
      description: task.description,
      requirements: task.requirements,
      estimatedHours: task.estimatedHours,
      priority: task.priority,
      deadline: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)) // 30 jours par défaut
    }));
  }

  resetForm() {
    this.projectForm.reset({
      name: '',
      description: '',
      duration: 30,
      availableEmployees: []
    });
    
    while (this.objectivesArray.length > 0) {
      this.objectivesArray.removeAt(0);
    }
    
    while (this.tasksArray.length > 0) {
      this.tasksArray.removeAt(0);
    }
    
    this.showResults = false;
    this.simulationResult = null;
  }

  // Méthodes utilitaires
  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  }

  getImportanceColor(importance: string): string {
    switch (importance) {
      case 'critical': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#d97706';
      case 'low': return '#65a30d';
      default: return '#6b7280';
    }
  }

  getImportanceLabel(importance: string): string {
    switch (importance) {
      case 'critical': return 'Critique';
      case 'high': return 'Élevée';
      case 'medium': return 'Moyenne';
      case 'low': return 'Faible';
      default: return importance;
    }
  }

  getLevelLabel(level: number): string {
    const labels = ['', 'Débutant', 'Intermédiaire', 'Compétent', 'Avancé', 'Expert'];
    return labels[level] || '';
  }

  getRiskLevelColor(riskLevel: string): string {
    switch (riskLevel) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  }

  getRiskLevelLabel(riskLevel: string): string {
    switch (riskLevel) {
      case 'low': return 'Faible';
      case 'medium': return 'Moyen';
      case 'high': return 'Élevé';
      default: return riskLevel;
    }
  }

  // Formater les dates
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  // Calculer la durée totale
  getTotalEstimatedHours(): number {
    return this.tasksArray.controls.reduce((total, task) => {
      return total + (task.value.estimatedHours || 0);
    }, 0);
  }

  // Obtenir le nom d'un employé
  getEmployeeName(employeeId: number): string {
    const employee = this.availableEmployees.find(emp => emp.id === employeeId);
    return employee ? employee.name : 'Employé inconnu';
  }

  // Vérifier si un employé est sélectionné
  isEmployeeSelected(employeeId: number): boolean {
    const selectedEmployees = this.projectForm.value.availableEmployees || [];
    return selectedEmployees.includes(employeeId);
  }

  toggleEmployeeSelection(employeeId: number) {
    const currentSelection = this.projectForm.value.availableEmployees || [];
    const index = currentSelection.indexOf(employeeId);
    
    if (index > -1) {
      currentSelection.splice(index, 1);
    } else {
      currentSelection.push(employeeId);
    }
    
    this.projectForm.patchValue({ availableEmployees: currentSelection });
  }
}

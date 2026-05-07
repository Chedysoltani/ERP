import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { 
  EmployeeSkillsProfile, 
  TaskWithRequirements, 
  EmployeeMatch,
  TaskRequirement,
  ProjectSimulation,
  Skill,
  Technology
} from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class IARecommendationService {
  private apiUrl = 'http://localhost:3001/api/manager';

  constructor(private http: HttpClient) {}

  // Obtenir les recommandations d'employés pour une tâche
  getTaskRecommendations(task: TaskWithRequirements): Observable<EmployeeMatch[]> {
    return this.http.post(`${this.apiUrl}/recommendations/task`, task).pipe(
      map((response: any) => {
        if (response.success) {
          return response.data.map((match: any) => this.formatEmployeeMatch(match));
        }
        return [];
      }),
      catchError(error => {
        console.error('Error getting task recommendations:', error);
        // Fallback vers l'algorithme local
        return of(this.calculateTaskMatches(task));
      })
    );
  }

  // Obtenir tous les profils de compétences des employés
  getEmployeeSkillsProfiles(): Observable<EmployeeSkillsProfile[]> {
    return this.http.get(`${this.apiUrl}/employees/skills-profiles`).pipe(
      map((response: any) => {
        if (response.success) {
          return response.data.map((profile: any) => this.formatSkillsProfile(profile));
        }
        return [];
      }),
      catchError(error => {
        console.error('Error loading skills profiles:', error);
        return throwError(() => error);
      })
    );
  }

  // Simuler un projet avec IA
  simulateProject(project: ProjectSimulation): Observable<any> {
    return this.http.post(`${this.apiUrl}/simulate-project`, project).pipe(
      map((response: any) => {
        if (response.success) {
          return response.data;
        }
        throw new Error('Project simulation failed');
      }),
      catchError(error => {
        console.error('Error simulating project:', error);
        // Fallback vers l'algorithme local
        return of(this.localProjectSimulation(project));
      })
    );
  }

  // Algorithme local de matching compétences-tâches
  private calculateTaskMatches(task: TaskWithRequirements): EmployeeMatch[] {
    // Pour l'instant, retourner des données mockées
    // En production, cela utilisera les vrais profils d'employés
    return [
      {
        employeeId: 1,
        employeeName: 'Jean Dupont',
        matchScore: 85,
        matchingSkills: ['JavaScript', 'React', 'Node.js'],
        missingSkills: ['TypeScript'],
        availability: 80,
        workload: 60,
        recommendation: 'highly_recommended'
      },
      {
        employeeId: 2,
        employeeName: 'Marie Martin',
        matchScore: 75,
        matchingSkills: ['JavaScript', 'React'],
        missingSkills: ['Node.js', 'TypeScript'],
        availability: 90,
        workload: 40,
        recommendation: 'recommended'
      },
      {
        employeeId: 3,
        employeeName: 'Pierre Durand',
        matchScore: 60,
        matchingSkills: ['Node.js'],
        missingSkills: ['JavaScript', 'React', 'TypeScript'],
        availability: 70,
        workload: 80,
        recommendation: 'consider'
      }
    ];
  }

  // Algorithme local de simulation de projet
  private localProjectSimulation(project: ProjectSimulation) {
    const startDate = new Date();
    const totalDays = project.duration;
    const endDate = new Date(startDate.getTime() + (totalDays * 24 * 60 * 60 * 1000));
    
    // Simulation simple de répartition des tâches
    const taskAssignments = project.tasks.map(task => ({
      taskId: task.id,
      employeeId: this.selectBestEmployee(task, project.availableEmployees)
    }));

    // Calcul du risque basé sur la complexité et la durée
    const riskLevel = this.calculateRiskLevel(project);

    return {
      timeline: this.generateTimeline(project.tasks, totalDays),
      taskAssignments,
      estimatedCompletion: endDate,
      riskLevel,
      recommendations: this.generateRecommendations(project, riskLevel)
    };
  }

  // Sélectionner le meilleur employé pour une tâche
  private selectBestEmployee(task: TaskWithRequirements, availableEmployees: number[]): number {
    // Logique simple pour l'instant
    // En production, cela analyserait les compétences réelles
    if (availableEmployees.length > 0) {
      return availableEmployees[0];
    }
    return 1; // Default employee
  }

  // Calculer le niveau de risque d'un projet
  private calculateRiskLevel(project: ProjectSimulation): 'low' | 'medium' | 'high' {
    let riskScore = 0;
    
    // Risque basé sur la durée
    if (project.duration > 60) riskScore += 2;
    else if (project.duration > 30) riskScore += 1;
    
    // Risque basé sur le nombre de tâches
    if (project.tasks.length > 20) riskScore += 2;
    else if (project.tasks.length > 10) riskScore += 1;
    
    // Risque basé sur la complexité des tâches
    const highComplexityTasks = project.tasks.filter(task => 
      task.requirements.some(req => req.importance === 'critical')
    ).length;
    
    if (highComplexityTasks > 5) riskScore += 2;
    else if (highComplexityTasks > 2) riskScore += 1;
    
    if (riskScore >= 4) return 'high';
    if (riskScore >= 2) return 'medium';
    return 'low';
  }

  // Générer une timeline pour le projet
  private generateTimeline(tasks: TaskWithRequirements[], totalDays: number): any[] {
    const timeline = [];
    const daysPerTask = Math.floor(totalDays / tasks.length);
    
    tasks.forEach((task, index) => {
      const startDay = index * daysPerTask;
      const endDay = Math.min((index + 1) * daysPerTask, totalDays);
      
      timeline.push({
        taskId: task.id,
        taskTitle: task.title,
        startDate: new Date(Date.now() + (startDay * 24 * 60 * 60 * 1000)),
        endDate: new Date(Date.now() + (endDay * 24 * 60 * 60 * 1000)),
        duration: endDay - startDay,
        priority: task.priority
      });
    });
    
    return timeline;
  }

  // Générer des recommandations pour le projet
  private generateRecommendations(project: ProjectSimulation, riskLevel: string): string[] {
    const recommendations = [];
    
    if (riskLevel === 'high') {
      recommendations.push('Considérez diviser le projet en plusieurs phases plus petites');
      recommendations.push('Prévoyez des points de contrôle réguliers');
      recommendations.push('Allouez des ressources supplémentaires en cas de retard');
    } else if (riskLevel === 'medium') {
      recommendations.push('Surveillez attentivement le progrès hebdomadaire');
      recommendations.push('Préparez un plan de contingence');
    } else {
      recommendations.push('Le projet semble réalisable dans les délais prévus');
    }
    
    // Recommandations basées sur les tâches
    const criticalTasks = project.tasks.filter(task => 
      task.requirements.some(req => req.importance === 'critical')
    );
    
    if (criticalTasks.length > 0) {
      recommendations.push(`Accordez une attention particulière aux ${criticalTasks.length} tâches critiques`);
    }
    
    return recommendations;
  }

  // Formatter un profil de compétences
  private formatSkillsProfile(data: any): EmployeeSkillsProfile {
    return {
      employeeId: data.employeeId,
      skills: data.skills || [],
      technologies: data.technologies || [],
      specialities: data.specialities || [],
      overallScore: data.overallScore || 0,
      lastUpdated: new Date(data.lastUpdated),
      strengths: data.strengths || [],
      improvementAreas: data.improvementAreas || []
    };
  }

  // Formatter un match d'employé
  private formatEmployeeMatch(data: any): EmployeeMatch {
    return {
      employeeId: data.employeeId,
      employeeName: data.employeeName,
      matchScore: data.matchScore || 0,
      matchingSkills: data.matchingSkills || [],
      missingSkills: data.missingSkills || [],
      availability: data.availability || 0,
      workload: data.workload || 0,
      recommendation: data.recommendation || 'consider'
    };
  }

  // Calculer le score de compatibilité entre un employé et une tâche
  calculateCompatibilityScore(employeeProfile: EmployeeSkillsProfile, task: TaskWithRequirements): number {
    let totalScore = 0;
    let maxScore = 0;
    
    task.requirements.forEach(requirement => {
      maxScore += requirement.importance === 'critical' ? 30 : 
                  requirement.importance === 'high' ? 20 : 
                  requirement.importance === 'medium' ? 10 : 5;
      
      const employeeSkill = employeeProfile.skills.find(s => s.name === requirement.skillName);
      if (employeeSkill) {
        const skillScore = Math.min(employeeSkill.level, requirement.requiredLevel) / requirement.requiredLevel;
        totalScore += skillScore * (requirement.importance === 'critical' ? 30 : 
                                   requirement.importance === 'high' ? 20 : 
                                   requirement.importance === 'medium' ? 10 : 5);
      }
    });
    
    return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  }

  // Analyser la charge de travail d'un employé
  analyzeWorkload(employeeId: number, currentTasks: any[]): { availability: number; workload: number } {
    const totalHours = currentTasks.reduce((sum, task) => sum + (task.estimatedHours || 0), 0);
    const weeklyCapacity = 40; // 40 heures par semaine
    const workload = Math.min((totalHours / weeklyCapacity) * 100, 100);
    const availability = Math.max(100 - workload, 0);
    
    return { availability, workload };
  }

  // Générer des suggestions d'amélioration pour un employé
  generateImprovementSuggestions(employeeProfile: EmployeeSkillsProfile): string[] {
    const suggestions = [];
    
    // Analyser les compétences faibles
    const weakSkills = employeeProfile.skills.filter(s => s.level <= 2);
    if (weakSkills.length > 0) {
      suggestions.push(`Considérez une formation pour améliorer: ${weakSkills.map(s => s.name).join(', ')}`);
    }
    
    // Analyser les technologies de base
    const basicTechnologies = employeeProfile.technologies.filter(t => t.proficiency === 'basic');
    if (basicTechnologies.length > 0) {
      suggestions.push(`Progresser sur les technologies: ${basicTechnologies.map(t => t.name).join(', ')}`);
    }
    
    // Suggestions basées sur les tendances du marché
    const hasModernSkills = employeeProfile.skills.some(s => 
      ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Docker'].includes(s.name)
    );
    
    if (!hasModernSkills) {
      suggestions.push('Considérez l\'apprentissage de technologies modernes (React, Angular, Node.js, etc.)');
    }
    
    return suggestions;
  }
}

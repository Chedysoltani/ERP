import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { 
  EmployeeSkillsProfile, 
  Skill, 
  Technology, 
  Speciality,
  SkillCategory,
  SKILL_CATEGORIES,
  TECHNOLOGY_CATEGORIES 
} from '../models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'http://localhost:3001/api/employee';

  constructor(private http: HttpClient) {}

  // Récupérer le profil de compétences d'un employé
  getEmployeeSkillsProfile(employeeId: number): Observable<EmployeeSkillsProfile> {
    return this.http.get(`${this.apiUrl}/${employeeId}/skills`).pipe(
      map((response: any) => {
        if (response.success) {
          return this.formatEmployeeSkillsProfile(response.data);
        }
        throw new Error('Failed to load skills profile');
      }),
      catchError(error => {
        console.error('Error loading skills profile:', error);
        // Retourner un profil vide en cas d'erreur
        return of(this.createEmptyProfile(employeeId));
      })
    );
  }

  // Sauvegarder le profil de compétences
  saveEmployeeSkillsProfile(profile: EmployeeSkillsProfile): Observable<any> {
    return this.http.post(`${this.apiUrl}/${profile.employeeId}/skills`, profile).pipe(
      tap(response => console.log('Skills profile saved:', response)),
      catchError(error => {
        console.error('Error saving skills profile:', error);
        return throwError(() => error);
      })
    );
  }

  // Ajouter une compétence
  addSkill(employeeId: number, skill: Omit<Skill, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/skills`, skill).pipe(
      catchError(error => {
        console.error('Error adding skill:', error);
        return throwError(() => error);
      })
    );
  }

  // Mettre à jour une compétence
  updateSkill(employeeId: number, skillId: number, skill: Partial<Skill>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employeeId}/skills/${skillId}`, skill).pipe(
      catchError(error => {
        console.error('Error updating skill:', error);
        return throwError(() => error);
      })
    );
  }

  // Supprimer une compétence
  deleteSkill(employeeId: number, skillId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${employeeId}/skills/${skillId}`).pipe(
      catchError(error => {
        console.error('Error deleting skill:', error);
        return throwError(() => error);
      })
    );
  }

  // Ajouter une technologie
  addTechnology(employeeId: number, technology: Omit<Technology, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/technologies`, technology).pipe(
      catchError(error => {
        console.error('Error adding technology:', error);
        return throwError(() => error);
      })
    );
  }

  // Mettre à jour une technologie
  updateTechnology(employeeId: number, techId: number, technology: Partial<Technology>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employeeId}/technologies/${techId}`, technology).pipe(
      catchError(error => {
        console.error('Error updating technology:', error);
        return throwError(() => error);
      })
    );
  }

  // Supprimer une technologie
  deleteTechnology(employeeId: number, techId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${employeeId}/technologies/${techId}`).pipe(
      catchError(error => {
        console.error('Error deleting technology:', error);
        return throwError(() => error);
      })
    );
  }

  // Ajouter une spécialité
  addSpeciality(employeeId: number, speciality: Omit<Speciality, 'id'>): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/specialities`, speciality).pipe(
      catchError(error => {
        console.error('Error adding speciality:', error);
        return throwError(() => error);
      })
    );
  }

  // Supprimer une spécialité
  deleteSpeciality(employeeId: number, specialityId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${employeeId}/specialities/${specialityId}`).pipe(
      catchError(error => {
        console.error('Error deleting speciality:', error);
        return throwError(() => error);
      })
    );
  }

  // Obtenir toutes les catégories de compétences
  getSkillCategories(): SkillCategory[] {
    return SKILL_CATEGORIES;
  }

  // Obtenir toutes les catégories de technologies
  getTechnologyCategories() {
    return TECHNOLOGY_CATEGORIES;
  }

  // Analyser et calculer le score global
  calculateOverallScore(profile: EmployeeSkillsProfile): number {
    let totalScore = 0;
    let maxScore = 0;

    // Score des compétences
    profile.skills.forEach(skill => {
      totalScore += skill.level * 20; // niveau 1-5 → 20-100 points
      maxScore += 100;
    });

    // Score des technologies
    profile.technologies.forEach(tech => {
      const techScore = this.getTechnologyScore(tech.proficiency);
      totalScore += techScore;
      maxScore += 100;
    });

    // Score des spécialités (bonus)
    totalScore += profile.specialities.length * 50;
    maxScore += profile.specialities.length * 50;

    return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  }

  // Obtenir le score d'une technologie selon sa maîtrise
  private getTechnologyScore(proficiency: string): number {
    switch (proficiency) {
      case 'expert': return 100;
      case 'advanced': return 80;
      case 'intermediate': return 60;
      case 'basic': return 40;
      default: return 20;
    }
  }

  // Formatter le profil depuis la réponse API
  private formatEmployeeSkillsProfile(data: any): EmployeeSkillsProfile {
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

  // Créer un profil vide
  private createEmptyProfile(employeeId: number): EmployeeSkillsProfile {
    return {
      employeeId,
      skills: [],
      technologies: [],
      specialities: [],
      overallScore: 0,
      lastUpdated: new Date(),
      strengths: [],
      improvementAreas: []
    };
  }

  // Analyser les forces et faiblesses
  analyzeProfile(profile: EmployeeSkillsProfile): { strengths: string[]; improvementAreas: string[] } {
    const strengths: string[] = [];
    const improvementAreas: string[] = [];

    // Analyser les compétences
    const highLevelSkills = profile.skills.filter(s => s.level >= 4);
    const lowLevelSkills = profile.skills.filter(s => s.level <= 2);

    if (highLevelSkills.length > 0) {
      strengths.push(`Expertise en ${highLevelSkills.map(s => s.name).join(', ')}`);
    }

    if (lowLevelSkills.length > 0) {
      improvementAreas.push(`Améliorer ${lowLevelSkills.map(s => s.name).join(', ')}`);
    }

    // Analyser les technologies
    const expertTechnologies = profile.technologies.filter(t => t.proficiency === 'expert');
    const basicTechnologies = profile.technologies.filter(t => t.proficiency === 'basic');

    if (expertTechnologies.length > 0) {
      strengths.push(`Maîtrise experte de ${expertTechnologies.map(t => t.name).join(', ')}`);
    }

    if (basicTechnologies.length > 0) {
      improvementAreas.push(`Progresser sur ${basicTechnologies.map(t => t.name).join(', ')}`);
    }

    // Analyser les catégories
    const categories = [...new Set(profile.skills.map(s => s.category))];
    if (categories.length < 3) {
      improvementAreas.push('Diversifier les compétences dans différentes catégories');
    }

    return { strengths, improvementAreas };
  }
}

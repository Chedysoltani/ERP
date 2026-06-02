const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtenir tous les profils de compétences des employés
router.get('/employees/skills-profiles', async (req, res) => {
  try {
    console.log('📋 Requête pour obtenir les profils de compétences des employés');
    
    const query = `
      SELECT 
        u.id as employeeId,
        u.prenom,
        u.nom,
        CONCAT(u.prenom, ' ', u.nom) as employeeName,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', es.id,
            'name', es.name,
            'category', es.category,
            'level', es.level,
            'yearsExperience', es.years_experience,
            'validated', es.validated,
            'lastUsed', es.last_used
          )
        ) as skills,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', et.id,
            'name', et.name,
            'category', et.category,
            'proficiency', et.proficiency,
            'projects', et.projects
          )
        ) FROM employee_technologies et WHERE et.employee_id = u.id) as technologies,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', esp.id,
            'name', esp.name,
            'domain', esp.domain,
            'description', esp.description
          )
        ) FROM employee_specialities esp WHERE esp.employee_id = u.id) as specialities
      FROM users u
      LEFT JOIN employee_skills es ON u.id = es.employee_id
      WHERE u.role = 'employee'
      GROUP BY u.id, u.prenom, u.nom
      ORDER BY u.prenom, u.nom
    `;
    
    const results = await db.query(query);
    
    // Calculer le score global pour chaque employé
    const profiles = results.map(employee => {
      const skills = employee.skills ? (typeof employee.skills === 'string' ? JSON.parse(employee.skills) : employee.skills) : [];
      const technologies = employee.technologies ? (typeof employee.technologies === 'string' ? JSON.parse(employee.technologies) : employee.technologies) : [];
      const specialities = employee.specialities ? (typeof employee.specialities === 'string' ? JSON.parse(employee.specialities) : employee.specialities) : [];
      
      // Calculer le score global basé sur les compétences
      let totalScore = 0;
      let skillCount = 0;
      
      skills.forEach(skill => {
        if (skill.validated) {
          totalScore += skill.level * 20; // 20 points par niveau validé
          skillCount++;
        }
      });
      
      const overallScore = skillCount > 0 ? Math.min(totalScore / (skillCount * 100) * 100, 100) : 0;
      
      return {
        employeeId: employee.employeeId,
        employeeName: employee.employeeName,
        skills: skills,
        technologies: technologies,
        specialities: specialities,
        overallScore: Math.round(overallScore),
        lastUpdated: new Date(),
        strengths: skills.filter(s => s.level >= 4).map(s => s.name),
        improvementAreas: skills.filter(s => s.level <= 2).map(s => s.name)
      };
    });
    
    console.log(`✅ ${profiles.length} profils d'employés trouvés`);
    
    // Log pour vérifier les données envoyées
    console.log('🔍 Données envoyées au frontend (premier profil):', profiles[0]);
    
    res.json({
      success: true,
      data: profiles,
      count: profiles.length
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des profils:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la récupération des profils de compétences',
      details: error.message
    });
  }
});

// Obtenir les recommandations d'employés pour une tâche spécifique
router.post('/recommendations/task', async (req, res) => {
  try {
    console.log('🎯 Requête de recommandations pour une tâche');
    const task = req.body;
    console.log('📋 Tâche reçue:', task);
    
    // Récupérer tous les employés avec leurs compétences
    const employeeProfilesQuery = `
      SELECT 
        u.id as employeeId,
        CONCAT(u.prenom, ' ', u.nom) as employeeName,
        u.prenom,
        u.nom,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'name', es.name,
            'level', es.level,
            'validated', es.validated
          )
        ) as skills
      FROM users u
      LEFT JOIN employee_skills es ON u.id = es.employee_id
      WHERE u.role = 'employee'
      GROUP BY u.id, u.prenom, u.nom
    `;
    
    const employeeResults = await db.query(employeeProfilesQuery);

    // ── Charge de travail réelle depuis la DB ─────────────────────────────
    // Tâches actives (todo + in_progress) par employé — table principale
    const workloadPrimary = await db.query(`
      SELECT assignee_id as emp_id,
             COUNT(*)                          AS active_tasks,
             COALESCE(SUM(estimated_hours), 0) AS total_hours
      FROM tasks
      WHERE status IN ('todo','in_progress') AND assignee_id IS NOT NULL
      GROUP BY assignee_id
    `);

    // Tâches actives via task_assignments (assignations multiples)
    let workloadMulti = [];
    try {
      workloadMulti = await db.query(`
        SELECT ta.employee_id AS emp_id,
               COUNT(DISTINCT ta.task_id)         AS active_tasks,
               COALESCE(SUM(t.estimated_hours), 0) AS total_hours
        FROM task_assignments ta
        JOIN tasks t ON ta.task_id = t.id
        WHERE t.status IN ('todo','in_progress')
        GROUP BY ta.employee_id
      `);
    } catch (_) {}

    // Fusionner les deux sources dans une map
    const workloadMap = {};
    for (const r of workloadPrimary) {
      workloadMap[r.emp_id] = {
        activeTasks: parseInt(r.active_tasks) || 0,
        hours: parseFloat(r.total_hours) || 0
      };
    }
    for (const r of workloadMulti) {
      if (workloadMap[r.emp_id]) {
        // Éviter double-comptage si déjà compté en primaire
        workloadMap[r.emp_id].activeTasks = Math.max(workloadMap[r.emp_id].activeTasks, parseInt(r.active_tasks) || 0);
        workloadMap[r.emp_id].hours = Math.max(workloadMap[r.emp_id].hours, parseFloat(r.total_hours) || 0);
      } else {
        workloadMap[r.emp_id] = {
          activeTasks: parseInt(r.active_tasks) || 0,
          hours: parseFloat(r.total_hours) || 0
        };
      }
    }

    const WEEKLY_CAPACITY = 40; // heures/semaine

    // Calculer les scores de matching pour chaque employé
    const recommendations = employeeResults.map(employee => {
      const skills = employee.skills
        ? (typeof employee.skills === 'string' ? JSON.parse(employee.skills) : employee.skills)
        : [];
      const matchingSkills = [];
      const missingSkills = [];
      let totalScore = 0;
      let maxScore = 0;

      task.requirements.forEach(requirement => {
        const employeeSkill = skills.find(s => s && s.name === requirement.skillName);
        const importanceWeight = requirement.importance === 'critical' ? 30 :
                                 requirement.importance === 'high'     ? 20 :
                                 requirement.importance === 'medium'   ? 10 : 5;
        maxScore += importanceWeight;

        if (employeeSkill) {
          const skillScore = Math.min(employeeSkill.level, requirement.requiredLevel) / requirement.requiredLevel;
          totalScore += skillScore * importanceWeight;
          matchingSkills.push(requirement.skillName);
        } else {
          missingSkills.push(requirement.skillName);
        }
      });

      const matchScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

      // ── Disponibilité réelle ─────────────────────────────────────────────
      const empLoad = workloadMap[employee.employeeId] || { activeTasks: 0, hours: 0 };
      const workloadPct = Math.min(Math.round((empLoad.hours / WEEKLY_CAPACITY) * 100), 100);
      const availability = Math.max(100 - workloadPct, 0);

      // ── Recommandation : compétences + disponibilité ─────────────────────
      let recommendation;
      if      (matchScore >= 80) recommendation = 'highly_recommended';
      else if (matchScore >= 60) recommendation = 'recommended';
      else if (matchScore >= 40) recommendation = 'consider';
      else                       recommendation = 'not_recommended';

      // Dégrader si l'employé est surchargé (>= 100% de capacité)
      if (workloadPct >= 100) {
        recommendation = recommendation === 'highly_recommended' ? 'recommended' :
                         recommendation === 'recommended'        ? 'consider'    : recommendation;
      }
      // Dégrader fortement si charge > 80% et score pas excellent
      if (workloadPct >= 80 && matchScore < 80) {
        recommendation = recommendation === 'highly_recommended' ? 'recommended' : recommendation;
      }

      return {
        employeeId: employee.employeeId,
        employeeName: employee.employeeName,
        matchScore,
        matchingSkills,
        missingSkills,
        availability,
        workload: workloadPct,
        activeTasks: empLoad.activeTasks,
        activeTasksHours: Math.round(empLoad.hours * 10) / 10,
        recommendation
      };
    }).filter(rec => rec.matchScore > 0);

    // Trier : d'abord par score, puis par disponibilité (employé libre en premier)
    recommendations.sort((a, b) =>
      b.matchScore !== a.matchScore
        ? b.matchScore - a.matchScore
        : b.availability - a.availability
    );
    
    console.log(`✅ ${recommendations.length} recommandations générées`);
    console.log('🏆 Meilleure recommandation:', recommendations[0]);
    
    res.json({
      success: true,
      data: recommendations,
      count: recommendations.length,
      taskAnalyzed: task.title
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des recommandations:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la génération des recommandations',
      details: error.message
    });
  }
});

// Simuler un projet avec IA
router.post('/simulate-project', async (req, res) => {
  try {
    console.log('🏗️ Requête de simulation de projet');
    const project = req.body;
    console.log('📋 Projet reçu:', project);
    
    // Récupérer les vrais employés avec leurs compétences depuis la base
    const employeeProfilesQuery = `
      SELECT 
        u.id as employeeId,
        u.prenom,
        u.nom,
        CONCAT(u.prenom, ' ', u.nom) as employeeName,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'name', es.name,
            'level', es.level,
            'validated', es.validated
          )
        ) as skills
      FROM users u
      LEFT JOIN employee_skills es ON u.id = es.employee_id
      WHERE u.role = 'employee' AND u.id IN (${project.availableEmployees.join(',')})
      GROUP BY u.id, u.prenom, u.nom
    `;
    
    const employeeResults = await db.query(employeeProfilesQuery);
    
    // Parser les compétences et créer une structure utilisable
    const availableEmployees = employeeResults.map(employee => {
      const skills = employee.skills ? (typeof employee.skills === 'string' ? JSON.parse(employee.skills) : employee.skills) : [];
      return {
        employeeId: employee.employeeId,
        employeeName: employee.employeeName,
        skills: skills
      };
    });
    
    console.log('👥 Employés disponibles pour simulation:', availableEmployees);
    
    const timeline = [];
    const daysPerTask = Math.floor(project.duration / project.tasks.length);
    
    project.tasks.forEach((task, index) => {
      const startDay = index * daysPerTask;
      const endDay = Math.min((index + 1) * daysPerTask, project.duration);
      
      timeline.push({
        taskId: task.id,
        taskTitle: task.title,
        startDate: new Date(Date.now() + (startDay * 24 * 60 * 60 * 1000)),
        endDate: new Date(Date.now() + (endDay * 24 * 60 * 60 * 1000)),
        duration: endDay - startDay,
        priority: task.priority
      });
    });
    
    // Simulation des assignations de tâches - utiliser les vraies données des employés
    const taskAssignments = project.tasks.map((task, index) => {
      if (availableEmployees.length === 0) {
        return {
          taskId: task.id,
          employeeId: 1 // Fallback
        };
      }
      
      let bestEmployee = availableEmployees[0];
      
      // Si la tâche a des requirements, trouver le meilleur employé
      if (task.requirements && task.requirements.length > 0) {
        let bestScore = -1;
        
        availableEmployees.forEach(employee => {
          let matchScore = 0;
          task.requirements.forEach(req => {
            const hasSkill = employee.skills.some(skill => skill.name === req.skillName);
            if (hasSkill) {
              matchScore += req.importance === 'critical' ? 30 : 
                           req.importance === 'high' ? 20 : 
                           req.importance === 'medium' ? 10 : 5;
            }
          });
          
          if (matchScore > bestScore) {
            bestScore = matchScore;
            bestEmployee = employee;
          }
        });
        
        console.log(`📊 Tâche "${task.title}" assignée à ${bestEmployee.employeeName} avec score ${bestScore}`);
      } else {
        // Round-robin si pas de requirements
        bestEmployee = availableEmployees[index % availableEmployees.length];
        console.log(`📊 Tâche "${task.title}" assignée à ${bestEmployee.employeeName} (round-robin)`);
      }
      
      return {
        taskId: task.id,
        employeeId: bestEmployee.employeeId,
        employeeName: bestEmployee.employeeName
      };
    });
    
    // Calcul du niveau de risque
    let riskScore = 0;
    if (project.duration > 60) riskScore += 2;
    else if (project.duration > 30) riskScore += 1;
    
    if (project.tasks.length > 20) riskScore += 2;
    else if (project.tasks.length > 10) riskScore += 1;
    
    const highComplexityTasks = project.tasks.filter(task => 
      task.requirements.some(req => req.importance === 'critical')
    ).length;
    
    if (highComplexityTasks > 5) riskScore += 2;
    else if (highComplexityTasks > 2) riskScore += 1;
    
    let riskLevel;
    if (riskScore >= 4) riskLevel = 'high';
    else if (riskScore >= 2) riskLevel = 'medium';
    else riskLevel = 'low';
    
    // Générer des recommandations
    const recommendations = [];
    
    // Recommandations basées sur le risque
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
    
    // Recommandations basées sur l'équipe
    if (availableEmployees.length > 1) {
      recommendations.push(`Planifiez une réunion de lancement avec l'équipe de ${availableEmployees.length} personnes`);
      recommendations.push('Mettez en place un système de communication quotidien');
    } else {
      recommendations.push('Assurez-vous que l\'employé assigné dispose de tout le nécessaire');
    }
    
    // Recommandations basées sur les tâches
    if (project.tasks.length === 1) {
      recommendations.push('Décomposez la tâche principale en sous-tâches pour un meilleur suivi');
    } else if (project.tasks.length > 3) {
      recommendations.push('Organisez des revues intermédiaires toutes les semaines');
    }
    
    // Recommandations basées sur la durée
    if (project.duration > 20) {
      recommendations.push('Planifiez une réunion de suivi la semaine prochaine');
      recommendations.push('Préparez un rapport d\'avancement à mi-parcours');
    }
    
    // Logs détaillés pour le débogage
    console.log('📊 Résultats de la simulation:');
    console.log(`  - Nombre de tâches: ${project.tasks.length}`);
    console.log(`  - Nombre d'employés disponibles: ${availableEmployees.length}`);
    console.log(`  - Nombre d'assignations: ${taskAssignments.length}`);
    console.log(`  - Assignations détaillées:`, taskAssignments);
    
    const simulationResult = {
      timeline,
      taskAssignments,
      estimatedCompletion: new Date(Date.now() + (project.duration * 24 * 60 * 60 * 1000)),
      riskLevel,
      recommendations,
      debugInfo: {
        totalTasks: project.tasks.length,
        totalEmployees: availableEmployees.length,
        totalAssignments: taskAssignments.length,
        availableEmployees: availableEmployees.map(emp => ({ id: emp.employeeId, name: emp.employeeName }))
      }
    };
    
    console.log('✅ Simulation de projet terminée');
    
    res.json({
      success: true,
      data: simulationResult
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la simulation du projet:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur lors de la simulation du projet',
      details: error.message
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Middleware pour vérifier si l'employé est authentifié
const checkEmployeeAuth = (req, res, next) => {
  // Pour l'instant, permettre l'accès sans authentification pour les tests
  // TODO: Implémenter l'authentification JWT réelle
  const employeeId = req.params.employeeId || req.body.employeeId;
  req.employeeId = employeeId;
  next();
  
  // Version avec authentification (à activer plus tard):
  /*
  const employeeId = req.employeeId;
  if (!employeeId) {
    return res.status(401).json({ 
      success: false, 
      message: 'Employé non authentifié' 
    });
  }
  next();
  */
};

// Appliquer le middleware à toutes les routes
router.use(checkEmployeeAuth);

// GET - Récupérer le profil de compétences d'un employé
router.get('/:employeeId/skills', async (req, res) => {
  try {
    const { employeeId } = req.params;
    
    const query = `
      SELECT 
        u.id,
        u.prenom,
        u.nom,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', s.id,
              'name', s.name,
              'category', s.category,
              'level', s.level,
              'yearsExperience', s.years_experience,
              'validated', s.validated,
              'lastUsed', s.last_used
            )
          ) FROM employee_skills s WHERE s.employee_id = u.id),
          '[]'
        ) as skills,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', t.id,
              'name', t.name,
              'category', t.category,
              'proficiency', t.proficiency,
              'projects', t.projects
            )
          ) FROM employee_technologies t WHERE t.employee_id = u.id),
          '[]'
        ) as technologies,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', sp.id,
              'name', sp.name,
              'domain', sp.domain,
              'description', sp.description
            )
          ) FROM employee_specialities sp WHERE sp.employee_id = u.id),
          '[]'
        ) as specialities
      FROM users u
      WHERE u.id = ?
    `;
    
    const results = await db.query(query, [employeeId]);
    
    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Profil de compétences non trouvé'
      });
    }
    
    const employee = results[0];
    const skills = employee.skills ? JSON.parse(employee.skills) : [];
    const technologies = employee.technologies ? JSON.parse(employee.technologies) : [];
    const specialities = employee.specialities ? JSON.parse(employee.specialities) : [];
    
    // Calculer le score global
    let totalScore = 0;
    let maxScore = 0;
    
    skills.forEach(skill => {
      totalScore += skill.level * 20; // niveau 1-5 → 20-100 points
      maxScore += 100;
    });
    
    technologies.forEach(tech => {
      const techScore = getTechnologyScore(tech.proficiency);
      totalScore += techScore;
      maxScore += 100;
    });
    
    specialities.forEach(() => {
      totalScore += 50; // Bonus par spécialité
      maxScore += 50;
    });
    
    const overallScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    
    // Analyser les forces et faiblesses
    const analysis = analyzeSkillsProfile(skills, technologies);
    
    const profileData = {
      employeeId: parseInt(employeeId),
      skills,
      technologies,
      specialities,
      overallScore,
      lastUpdated: new Date(),
      strengths: analysis.strengths,
      improvementAreas: analysis.improvementAreas
    };
    
    res.json({
      success: true,
      data: profileData
    });
    
  } catch (error) {
    console.error('Erreur lors de la récupération du profil de compétences:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// POST - Ajouter une compétence
router.post('/:employeeId/skills', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { name, category, level, yearsExperience, validated } = req.body;
    
    if (!name || !category || !level || !yearsExperience) {
      return res.status(400).json({
        success: false,
        message: 'Champs obligatoires manquants'
      });
    }
    
    const query = `
      INSERT INTO employee_skills (employee_id, name, category, level, years_experience, validated, last_used)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    await db.query(query, [
      employeeId, name, category, level, yearsExperience, validated || false, new Date()
    ]);
    
    res.json({
      success: true,
      message: 'Compétence ajoutée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'ajout de compétence:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// PUT - Mettre à jour une compétence
router.put('/:employeeId/skills/:skillId', async (req, res) => {
  try {
    const { employeeId, skillId } = req.params;
    const { name, category, level, yearsExperience, validated } = req.body;
    
    const query = `
      UPDATE employee_skills 
      SET name = ?, category = ?, level = ?, years_experience = ?, validated = ?, last_used = ?
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(query, [
      name, category, level, yearsExperience, validated, new Date(), skillId, employeeId
    ]);
    
    res.json({
      success: true,
      message: 'Compétence mise à jour avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de la mise à jour de compétence:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// DELETE - Supprimer une compétence
router.delete('/:employeeId/skills/:skillId', async (req, res) => {
  try {
    const { employeeId, skillId } = req.params;
    
    const query = `
      DELETE FROM employee_skills 
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(query, [skillId, employeeId]);
    
    res.json({
      success: true,
      message: 'Compétence supprimée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de la suppression de compétence:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// POST - Ajouter une technologie
router.post('/:employeeId/technologies', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { name, category, proficiency, projects } = req.body;
    
    if (!name || !category || !proficiency) {
      return res.status(400).json({
        success: false,
        message: 'Champs obligatoires manquants'
      });
    }
    
    const query = `
      INSERT INTO employee_technologies (employee_id, name, category, proficiency, projects)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    await db.query(query, [employeeId, name, category, proficiency, projects || 0]);
    
    res.json({
      success: true,
      message: 'Technologie ajoutée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'ajout de technologie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// PUT - Mettre à jour une technologie
router.put('/:employeeId/technologies/:techId', async (req, res) => {
  try {
    const { employeeId, techId } = req.params;
    const { name, category, proficiency, projects } = req.body;
    
    const query = `
      UPDATE employee_technologies 
      SET name = ?, category = ?, proficiency = ?, projects = ?
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(query, [name, category, proficiency, projects, techId, employeeId]);
    
    res.json({
      success: true,
      message: 'Technologie mise à jour avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de la mise à jour de technologie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// DELETE - Supprimer une technologie
router.delete('/:employeeId/technologies/:techId', async (req, res) => {
  try {
    const { employeeId, techId } = req.params;
    
    const query = `
      DELETE FROM employee_technologies 
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(query, [techId, employeeId]);
    
    res.json({
      success: true,
      message: 'Technologie supprimée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de la suppression de technologie:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// POST - Ajouter une spécialité
router.post('/:employeeId/specialities', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { name, domain, description } = req.body;
    
    if (!name || !domain || !description) {
      return res.status(400).json({
        success: false,
        message: 'Champs obligatoires manquants'
      });
    }
    
    const query = `
      INSERT INTO employee_specialities (employee_id, name, domain, description)
      VALUES (?, ?, ?, ?)
    `;
    
    await db.query(query, [employeeId, name, domain, description]);
    
    res.json({
      success: true,
      message: 'Spécialité ajoutée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'ajout de spécialité:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// DELETE - Supprimer une spécialité
router.delete('/:employeeId/specialities/:specialityId', async (req, res) => {
  try {
    const { employeeId, specialityId } = req.params;
    
    const query = `
      DELETE FROM employee_specialities 
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(query, [specialityId, employeeId]);
    
    res.json({
      success: true,
      message: 'Spécialité supprimée avec succès'
    });
    
  } catch (error) {
    console.error('Erreur lors de la suppression de spécialité:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// Fonctions utilitaires
function getTechnologyScore(proficiency) {
  const scores = {
    'basic': 40,
    'intermediate': 60,
    'advanced': 80,
    'expert': 100
  };
  return scores[proficiency] || 40;
}

function analyzeSkillsProfile(skills, technologies) {
  const strengths = [];
  const improvementAreas = [];
  
  // Analyser les compétences
  const highLevelSkills = skills.filter(s => s.level >= 4);
  const lowLevelSkills = skills.filter(s => s.level <= 2);
  
  if (highLevelSkills.length > 0) {
    strengths.push(`Expertise en ${highLevelSkills.map(s => s.name).join(', ')}`);
  }
  
  if (lowLevelSkills.length > 0) {
    improvementAreas.push(`Améliorer ${lowLevelSkills.map(s => s.name).join(', ')}`);
  }
  
  // Analyser les technologies
  const expertTechnologies = technologies.filter(t => t.proficiency === 'expert');
  const basicTechnologies = technologies.filter(t => t.proficiency === 'basic');
  
  if (expertTechnologies.length > 0) {
    strengths.push(`Maîtrise experte de ${expertTechnologies.map(t => t.name).join(', ')}`);
  }
  
  if (basicTechnologies.length > 0) {
    improvementAreas.push(`Progresser sur ${basicTechnologies.map(t => t.name).join(', ')}`);
  }
  
  // Suggestions basées sur les tendances
  const hasModernSkills = skills.some(s => 
    ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Docker'].includes(s.name)
  );
  
  if (!hasModernSkills) {
    improvementAreas.push('Considérez l\'apprentissage de technologies modernes');
  }
  
  return { strengths, improvementAreas };
}

module.exports = router;

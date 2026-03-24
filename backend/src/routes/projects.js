const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET tous les projets
router.get('/', async (req, res) => {
  try {
    const projects = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json({
      success: true,
      data: projects,
      message: 'Projets récupérés avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /projects:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des projets',
      error: error.message
    });
  }
});

// GET projets par manager
router.get('/manager/:managerId', async (req, res) => {
  try {
    const managerId = parseInt(req.params.managerId);
    const managerProjects = await db.query(
      'SELECT * FROM projects WHERE manager_id = ? ORDER BY created_at DESC', 
      [managerId]
    );
    
    res.json({
      success: true,
      data: managerProjects,
      message: `Projets du manager ${managerId} récupérés avec succès`
    });
  } catch (error) {
    console.error('Erreur GET /projects/manager/:managerId:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des projets du manager',
      error: error.message
    });
  }
});

// POST créer un projet
router.post('/', async (req, res) => {
  console.log('Requête de création de projet reçue:', req.body);
  
  const {
    name,
    description,
    team,
    priority,
    startDate,
    endDate,
    budget,
    manager_id,
    deadline
  } = req.body;

  // Validation
  if (!name || !team || !manager_id) {
    return res.status(400).json({
      success: false,
      message: 'Champs obligatoires manquants: name, team, manager_id'
    });
  }

  try {
    // Créer le nouveau projet dans la base de données
    const result = await db.query(
      `INSERT INTO projects (name, description, team, priority, start_date, end_date, budget, manager_id, deadline) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, description || '', team, priority || 'medium', startDate || null, endDate || null, budget || 0, manager_id, deadline || endDate]
    );

    // Récupérer le projet créé
    const newProject = await db.query('SELECT * FROM projects WHERE id = ?', [result.insertId]);

    console.log('Projet créé dans MySQL:', newProject[0]);

    res.status(201).json({
      success: true,
      data: newProject[0],
      message: 'Projet créé avec succès'
    });
  } catch (error) {
    console.error('Erreur POST /projects:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création du projet',
      error: error.message
    });
  }
});

// GET un projet par ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const project = await db.query('SELECT * FROM projects WHERE id = ?', [id]);

    if (project.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Projet non trouvé'
      });
    }

    res.json({
      success: true,
      data: project[0],
      message: 'Projet récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /projects/:id:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du projet',
      error: error.message
    });
  }
});

// PUT mettre à jour un projet
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {
      name,
      description,
      team,
      priority,
      startDate,
      endDate,
      budget,
      deadline,
      status,
      progress
    } = req.body;

    // Vérifier si le projet existe
    const existingProject = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existingProject.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Projet non trouvé'
      });
    }

    // Mettre à jour le projet
    await db.query(
      `UPDATE projects SET 
       name = ?, description = ?, team = ?, priority = ?, 
       start_date = ?, end_date = ?, budget = ?, deadline = ?, 
       status = ?, progress = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [name, description, team, priority, startDate, endDate, budget, deadline, status, progress, id]
    );

    // Récupérer le projet mis à jour
    const updatedProject = await db.query('SELECT * FROM projects WHERE id = ?', [id]);

    res.json({
      success: true,
      data: updatedProject[0],
      message: 'Projet mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur PUT /projects/:id:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du projet',
      error: error.message
    });
  }
});

// DELETE supprimer un projet
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Vérifier si le projet existe
    const existingProject = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existingProject.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Projet non trouvé'
      });
    }

    // Supprimer le projet
    await db.query('DELETE FROM projects WHERE id = ?', [id]);

    res.json({
      success: true,
      data: existingProject[0],
      message: 'Projet supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur DELETE /projects/:id:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du projet',
      error: error.message
    });
  }
});

module.exports = router;

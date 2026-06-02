const express = require('express');
const router = express.Router();
const db = require('../config/database');

function isStartBlockedByDependency(dependencyType, predStatus) {
  if (dependencyType === 'start_to_start') return predStatus === 'todo';
  if (dependencyType === 'finish_to_finish') return false;
  return predStatus !== 'done';
}

function isDoneBlockedByDependency(dependencyType, predStatus) {
  if (dependencyType === 'finish_to_finish' || dependencyType === 'finish_to_start') {
    return predStatus !== 'done';
  }
  if (dependencyType === 'start_to_start') return predStatus === 'todo';
  return false;
}

// GET les tâches assignées à l'employé
router.get('/:employeeId/tasks', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    const tasks = await db.query(`
      SELECT t.*, p.name as project_name, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.creator_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY t.due_date ASC, t.created_at DESC
    `, [employeeId]);

    res.json({
      success: true,
      data: tasks,
      message: 'Tâches de l\'employé récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des tâches de l\'employé',
      error: error.message
    });
  }
});

// GET les projets où l'employé est assigné
router.get('/:employeeId/projects', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    const projects = await db.query(`
      SELECT DISTINCT p.*, CONCAT(u.prenom, ' ', u.nom) as manager_name
      FROM projects p
      INNER JOIN tasks t ON p.id = t.project_id
      LEFT JOIN users u ON p.manager_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY p.deadline ASC, p.created_at DESC
    `, [employeeId]);

    res.json({
      success: true,
      data: projects,
      message: 'Projets de l\'employé récupérés avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/projects:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des projets de l\'employé',
      error: error.message
    });
  }
});

// GET les réunions de l'employé
router.get('/:employeeId/meetings', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    // Pour l'instant, on récupère toutes les réunions créées par les managers
    // Plus tard, on pourra ajouter une table meeting_participants
    const meetings = await db.query(`
      SELECT m.*, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM meetings m
      LEFT JOIN users u ON m.creator_id = u.id
      WHERE m.creator_id IN (
        SELECT DISTINCT manager_id FROM projects
        INNER JOIN tasks ON projects.id = tasks.project_id
        WHERE tasks.assignee_id = ?
      )
      ORDER BY m.date_time ASC
    `, [employeeId]);

    res.json({
      success: true,
      data: meetings,
      message: 'Réunions de l\'employé récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/meetings:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des réunions de l\'employé',
      error: error.message
    });
  }
});

// GET le dashboard complet de l'employé
router.get('/:employeeId/dashboard', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    // Récupérer les statistiques des tâches
    const taskStats = await db.query(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'todo' THEN 1 ELSE 0 END) as todo,
        SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress,
        SUM(CASE WHEN status = 'done' THEN 1 ELSE 0 END) as done,
        SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled,
        SUM(CASE WHEN due_date < CURDATE() AND status != 'done' THEN 1 ELSE 0 END) as overdue
      FROM tasks 
      WHERE assignee_id = ?
    `, [employeeId]);

    // Récupérer les tâches récentes
    const recentTasks = await db.query(`
      SELECT t.*, p.name as project_name, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.creator_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY t.created_at DESC
      LIMIT 5
    `, [employeeId]);

    // Récupérer les projets actifs
    const activeProjects = await db.query(`
      SELECT DISTINCT p.*, COUNT(t.id) as task_count
      FROM projects p
      INNER JOIN tasks t ON p.id = t.project_id
      WHERE t.assignee_id = ? AND p.status = 'active'
      GROUP BY p.id
      ORDER BY p.deadline ASC
    `, [employeeId]);

    // Récupérer les réunions à venir
    const upcomingMeetings = await db.query(`
      SELECT m.*, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM meetings m
      LEFT JOIN users u ON m.creator_id = u.id
      WHERE m.date_time > NOW() AND m.creator_id IN (
        SELECT DISTINCT manager_id FROM projects
        INNER JOIN tasks ON projects.id = tasks.project_id
        WHERE tasks.assignee_id = ?
      )
      ORDER BY m.date_time ASC
      LIMIT 3
    `, [employeeId]);

    res.json({
      success: true,
      data: {
        stats: taskStats[0],
        recentTasks,
        activeProjects,
        upcomingMeetings
      },
      message: 'Dashboard de l\'employé récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du dashboard de l\'employé',
      error: error.message
    });
  }
});

// PUT mettre à jour le statut d'une tâche (pour l'employé)
router.put('/:employeeId/tasks/:taskId/status', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const taskId = parseInt(req.params.taskId);
    const { status } = req.body;

    // Vérifier que la tâche est bien assignée à cet employé
    const task = await db.query('SELECT * FROM tasks WHERE id = ? AND assignee_id = ?', [taskId, employeeId]);
    if (task.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tâche non trouvée ou non assignée à cet employé'
      });
    }

    // Vérifier les dépendances avant de commencer ou terminer la tâche
    const predDeps = await db.query(
      `
      SELECT td.dependency_type, pt.status AS pred_status
      FROM task_dependencies td
      JOIN tasks pt ON pt.id = td.depends_on_task_id
      WHERE td.task_id = ?
      `,
      [taskId]
    );

    for (const d of predDeps) {
      if (status === 'in_progress' && isStartBlockedByDependency(d.dependency_type, d.pred_status)) {
        return res.status(400).json({
          success: false,
          message: 'Cette tâche ne peut pas passer en cours : une dépendance sur une tâche prédécesseur n’est pas satisfaite.'
        });
      }
      if (status === 'done' && isDoneBlockedByDependency(d.dependency_type, d.pred_status)) {
        return res.status(400).json({
          success: false,
          message: 'Cette tâche ne peut pas être terminée : une dépendance impose que la tâche prédécesseur soit dans un état compatible.'
        });
      }
    }

    // Mettre à jour le statut
    await db.query(`
      UPDATE tasks SET 
        status = ?, 
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [status, taskId]);

    // Récupérer la tâche mise à jour
    const updatedTask = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);

    res.json({
      success: true,
      data: updatedTask[0],
      message: 'Statut de la tâche mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur PUT /employee/:employeeId/tasks/:taskId/status:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du statut de la tâche',
      error: error.message
    });
  }
});

// GET les timesheets de l'employé
router.get('/:employeeId/timesheets', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    const timesheets = await db.query(`
      SELECT
        t.id,
        t.date,
        t.hours,
        t.description,
        t.status,
        t.created_at,
        COALESCE(p.name, 'Non assigné') as project_name
      FROM timesheets t
      LEFT JOIN projects p ON t.project_id = p.id
      WHERE t.employee_id = ?
      ORDER BY t.date DESC, t.created_at DESC
    `, [employeeId]);

    const formattedTimesheets = timesheets.map(row => {
      const d = row.date ? new Date(row.date) : null;
      return {
        id: row.id,
        date_raw: d ? d.toISOString().split('T')[0] : null,
        project: row.project_name,
        task_title: null,
        hours: parseFloat(row.hours) || 0,
        description: row.description || '',
        status: row.status || 'pending'
      };
    });

    res.json({
      success: true,
      data: formattedTimesheets,
      message: 'Timesheets de l\'employé récupérés avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/timesheets:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des timesheets de l\'employé',
      error: error.message
    });
  }
});

// POST créer un nouveau timesheet pour l'employé
router.post('/:employeeId/timesheets', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const { date, project_id, hours, description, status = 'pending' } = req.body;
    
    // Validation des données
    if (!date || !hours) {
      return res.status(400).json({
        success: false,
        message: 'Les champs date et hours sont obligatoires'
      });
    }
    
    // Insérer le timesheet
    const insertQuery = `
      INSERT INTO timesheets (employee_id, date, project_id, hours, description, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const result = await db.query(insertQuery, [employeeId, date, project_id || null, hours, description, status]);
    
    res.json({
      success: true,
      data: {
        id: result.insertId,
        employee_id: employeeId,
        date,
        project_id,
        hours,
        description,
        status
      },
      message: 'Timesheet créé avec succès'
    });
  } catch (error) {
    console.error('Erreur POST /employee/:employeeId/timesheets:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création du timesheet',
      error: error.message
    });
  }
});

// PUT mettre à jour un timesheet
router.put('/:employeeId/timesheets/:timesheetId', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const timesheetId = parseInt(req.params.timesheetId);
    const { date, project_id, hours, description, status } = req.body;
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Mettre à jour le timesheet
    const updateQuery = `
      UPDATE timesheets 
      SET date = ?, project_id = ?, hours = ?, description = ?, status = ?
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(updateQuery, [date, project_id || null, hours, description, status, timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur PUT /employee/:employeeId/timesheets/:timesheetId:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du timesheet',
      error: error.message
    });
  }
});

// PUT soumettre un timesheet pour validation
router.put('/:employeeId/timesheets/:timesheetId/submit', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const timesheetId = parseInt(req.params.timesheetId);
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Mettre à jour le statut
    const updateQuery = 'UPDATE timesheets SET status = ? WHERE id = ? AND employee_id = ?';
    await db.query(updateQuery, ['submitted', timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet soumis pour validation'
    });
  } catch (error) {
    console.error('Erreur PUT /employee/:employeeId/timesheets/:timesheetId/submit:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la soumission du timesheet',
      error: error.message
    });
  }
});

// DELETE supprimer un timesheet
router.delete('/:employeeId/timesheets/:timesheetId', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const timesheetId = parseInt(req.params.timesheetId);
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Supprimer le timesheet
    await db.query('DELETE FROM timesheets WHERE id = ? AND employee_id = ?', [timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur DELETE /employee/:employeeId/timesheets/:timesheetId:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du timesheet',
      error: error.message
    });
  }
});

// Route pour vérifier la structure de la table timesheets (debug)
router.get('/debug/timesheets-structure', async (req, res) => {
  try {
    const structure = await db.query('DESCRIBE timesheets');
    res.json({
      success: true,
      data: structure,
      message: 'Structure de la table timesheets'
    });
  } catch (error) {
    console.error('Erreur lors de la vérification de la structure:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la vérification de la structure',
      error: error.message
    });
  }
});

module.exports = router;

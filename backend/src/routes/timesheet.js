const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtenir les entrées de timesheet pour le manager
router.get('/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    
    // Récupérer toutes les tâches avec les informations des projets
    const query = `
      SELECT 
        t.id as task_id,
        t.title as task_title,
        t.description as task_description,
        t.status as task_status,
        t.estimated_hours,
        t.actual_hours,
        t.created_at,
        t.due_date,
        t.start_date,
        t.end_date,
        p.id as project_id,
        p.name as project_name,
        p.description as project_description,
        p.status as project_status,
        u.nom as user_nom,
        u.prenom as user_prenom,
        u.email as user_email,
        u.role as user_role
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.assignee_id = u.id
      WHERE (t.creator_id = ? OR t.assignee_id = ? OR p.manager_id = ?)
      ORDER BY t.created_at DESC
    `;
    
    const results = await db.query(query, [managerId, managerId, managerId]);
    
    // Transformer les résultats en format timesheet
    const timesheetEntries = results.map(row => {
      // Calculer la durée (utiliser actual_hours si disponible, sinon estimated_hours)
      const duration = row.actual_hours || row.estimated_hours || 0;
      
      return {
        id: row.task_id,
        date: row.created_at,
        project: row.project_name || 'Non assigné',
        task: row.task_title,
        duration: duration,
        status: row.task_status === 'done' ? 'approved' : 'pending',
        user: `${row.user_prenom || ''} ${row.user_nom || ''}`.trim() || 'Non assigné',
        userEmail: row.user_email,
        userRole: row.user_role,
        projectId: row.project_id,
        taskDescription: row.task_description,
        projectStatus: row.project_status,
        dueDate: row.due_date,
        startDate: row.start_date,
        endDate: row.end_date
      };
    });
    
    res.json({
      success: true,
      data: timesheetEntries,
      message: 'Timesheet récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du timesheet'
    });
  }
});

// Obtenir les statistiques du timesheet
router.get('/stats/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    
    // Statistiques globales
    const statsQuery = `
      SELECT 
        COUNT(*) as total_entries,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks,
        COUNT(CASE WHEN t.status = 'in_progress' THEN 1 END) as in_progress_tasks,
        COUNT(CASE WHEN t.status = 'todo' THEN 1 END) as todo_tasks,
        COUNT(DISTINCT t.project_id) as active_projects,
        COUNT(DISTINCT t.assignee_id) as active_users
      FROM tasks t
      WHERE (t.creator_id = ? OR t.assignee_id = ?)
    `;
    
    const stats = await db.query(statsQuery, [managerId, managerId]);
    
    // Statistiques par projet
    const projectStatsQuery = `
      SELECT 
        p.name as project_name,
        COUNT(t.id) as task_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.manager_id = ?
      GROUP BY p.id, p.name
      ORDER BY total_hours DESC
    `;
    
    const projectStats = await db.query(projectStatsQuery, [managerId]);
    
    // Statistiques par utilisateur
    const userStatsQuery = `
      SELECT 
        u.nom,
        u.prenom,
        u.email,
        u.role,
        COUNT(t.id) as task_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks
      FROM users u
      LEFT JOIN tasks t ON u.id = t.assignee_id
      WHERE u.id IN (
        SELECT DISTINCT assignee_id FROM tasks WHERE creator_id = ?
        UNION
        SELECT DISTINCT creator_id FROM tasks WHERE assignee_id = ?
      )
      GROUP BY u.id, u.nom, u.prenom, u.email, u.role
      ORDER BY total_hours DESC
    `;
    
    const userStats = await db.query(userStatsQuery, [managerId, managerId]);
    
    res.json({
      success: true,
      data: {
        global: stats[0],
        byProject: projectStats,
        byUser: userStats
      },
      message: 'Statistiques du timesheet récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des statistiques'
    });
  }
});

// Obtenir les entrées par période
router.get('/period/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    const { startDate, endDate, period } = req.query;
    
    let dateFilter = '';
    let queryParams = [managerId, managerId];
    
    if (startDate && endDate) {
      dateFilter = 'AND t.created_at BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    } else if (period) {
      switch(period) {
        case 'week':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
          break;
        case 'month':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
          break;
        case 'quarter':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)';
          break;
        default:
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
      }
    }
    
    const query = `
      SELECT 
        DATE(t.created_at) as date,
        COUNT(*) as entries_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks,
        COUNT(CASE WHEN t.status = 'in_progress' THEN 1 END) as in_progress_tasks,
        COUNT(CASE WHEN t.status = 'todo' THEN 1 END) as todo_tasks
      FROM tasks t
      WHERE (t.creator_id = ? OR t.assignee_id = ?) ${dateFilter}
      GROUP BY DATE(t.created_at)
      ORDER BY date DESC
    `;
    
    const results = await db.query(query, queryParams);
    
    res.json({
      success: true,
      data: results,
      message: 'Entrées par période récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des entrées par période:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des entrées par période'
    });
  }
});

module.exports = router;

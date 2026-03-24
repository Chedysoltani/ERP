const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtenir toutes les tâches du manager connecté
router.get('/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    
    const tasks = await db.query(`
      SELECT * FROM tasks
      WHERE creator_id = ? OR assignee_id = ?
      ORDER BY created_at DESC
    `, [managerId, managerId]);

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des tâches'
    });
  }
});

// Obtenir les tâches par statut (Kanban)
router.get('/status/:status', async (req, res) => {
  try {
    const { status } = req.params;
    const { managerId } = req.query;
    
    const tasks = await db.query(`
      SELECT * FROM tasks
      WHERE status = ? AND (creator_id = ? OR assignee_id = ?)
      ORDER BY created_at DESC
    `, [status, managerId, managerId]);

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches par statut:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des tâches'
    });
  }
});

// Créer une nouvelle tâche
router.post('/', async (req, res) => {
  try {
    console.log('Données reçues pour création de tâche:', req.body);
    
    const {
      title,
      description,
      priority = 'medium',
      assignee_id,
      project_id,
      creator_id,
      due_date,
      start_date,
      estimated_hours,
      tags
    } = req.body;

    console.log('Valeurs extraites:', {
      title, description, priority, assignee_id, 
      project_id, creator_id, due_date, start_date, 
      estimated_hours, tags
    });

    if (!title || !creator_id) {
      console.log('Validation échouée - titre ou creator_id manquant');
      return res.status(400).json({
        success: false,
        message: 'Le titre et le créateur sont obligatoires'
      });
    }

    const result = await db.query(`
      INSERT INTO tasks (
        title, description, priority, status, assignee_id, 
        project_id, creator_id, due_date, start_date, 
        estimated_hours, tags
      ) VALUES (?, ?, ?, 'todo', ?, ?, ?, ?, ?, ?, ?)
    `, [
      title, 
      description || null, 
      priority, 
      assignee_id || null, 
      project_id || null, 
      creator_id, 
      due_date || null, 
      start_date || null, 
      estimated_hours || null, 
      tags ? JSON.stringify(tags) : null
    ]);

    console.log('Tâche insérée avec ID:', result.insertId);

    // Récupérer la tâche créée
    const [newTask] = await db.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);

    res.status(201).json({
      success: true,
      message: 'Tâche créée avec succès',
      data: newTask
    });
  } catch (error) {
    console.error('Erreur lors de la création de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création de la tâche'
    });
  }
});

// Mettre à jour une tâche
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Mise à jour de la tâche:', id, 'avec données:', req.body);
    
    // Construire dynamiquement la requête SQL
    const updates = [];
    const values = [];
    
    // Ajouter seulement les champs qui sont fournis
    if (req.body.title !== undefined) {
      updates.push('title = ?');
      values.push(req.body.title);
    }
    if (req.body.description !== undefined) {
      updates.push('description = ?');
      values.push(req.body.description);
    }
    if (req.body.priority !== undefined) {
      updates.push('priority = ?');
      values.push(req.body.priority);
    }
    if (req.body.status !== undefined) {
      updates.push('status = ?');
      values.push(req.body.status);
    }
    if (req.body.assignee_id !== undefined) {
      updates.push('assignee_id = ?');
      values.push(req.body.assignee_id);
    }
    if (req.body.project_id !== undefined) {
      updates.push('project_id = ?');
      values.push(req.body.project_id);
    }
    if (req.body.due_date !== undefined) {
      updates.push('due_date = ?');
      values.push(req.body.due_date);
    }
    if (req.body.start_date !== undefined) {
      updates.push('start_date = ?');
      values.push(req.body.start_date);
    }
    if (req.body.end_date !== undefined) {
      updates.push('end_date = ?');
      values.push(req.body.end_date);
    }
    if (req.body.estimated_hours !== undefined) {
      updates.push('estimated_hours = ?');
      values.push(req.body.estimated_hours);
    }
    if (req.body.actual_hours !== undefined) {
      updates.push('actual_hours = ?');
      values.push(req.body.actual_hours);
    }
    if (req.body.progress !== undefined) {
      updates.push('progress = ?');
      values.push(req.body.progress);
    }
    if (req.body.tags !== undefined) {
      updates.push('tags = ?');
      values.push(req.body.tags ? JSON.stringify(req.body.tags) : null);
    }
    
    // Ajouter toujours updated_at
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id); // Ajouter l'ID pour le WHERE
    
    if (updates.length === 1) { // Seulement updated_at
      return res.status(400).json({
        success: false,
        message: 'Aucun champ à mettre à jour'
      });
    }

    // Vérifier si la tâche existe
    const existingTask = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    if (existingTask.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
    }

    // Construire la requête SQL
    const sql = `UPDATE tasks SET ${updates.join(', ')} WHERE id = ?`;
    console.log('SQL généré:', sql);
    console.log('Valeurs:', values);

    // Mettre à jour la tâche
    await db.query(sql, values);

    console.log('Tâche mise à jour avec succès:', id);

    // Récupérer la tâche mise à jour
    const [updatedTask] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Tâche mise à jour avec succès',
      data: updatedTask
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de la tâche'
    });
  }
});

// Supprimer une tâche
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si la tâche existe
    const existingTask = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    if (existingTask.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
    }

    // Supprimer la tâche
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Tâche supprimée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression de la tâche'
    });
  }
});

// Approuver une tâche
router.put('/:id/approve', async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(`
      UPDATE tasks SET 
        status = 'done', 
        end_date = CURRENT_DATE,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [id]);

    res.json({
      success: true,
      message: 'Tâche approuvée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de l\'approbation de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'approbation de la tâche'
    });
  }
});

// Mettre à jour le statut d'une tâche (pour le drag and drop)
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    console.log(`Mise à jour du statut de la tâche ${id} vers: ${status}`);

    // Vérifier si la tâche existe
    const existingTask = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    if (existingTask.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tâche non trouvée'
      });
    }

    // Mettre à jour le statut
    await db.query(`
      UPDATE tasks SET 
        status = ?, 
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [status, id]);

    console.log(`Statut de la tâche ${id} mis à jour vers: ${status}`);

    // Récupérer la tâche mise à jour
    const [updatedTask] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Statut de la tâche mis à jour avec succès',
      data: updatedTask
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du statut de la tâche'
    });
  }
});

// Rejeter une tâche
router.put('/:id/reject', async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    await db.query(`
      UPDATE tasks SET 
        status = 'cancelled',
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [id]);

    res.json({
      success: true,
      message: 'Tâche rejetée'
    });
  } catch (error) {
    console.error('Erreur lors du rejet de la tâche:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors du rejet de la tâche'
    });
  }
});

module.exports = router;

-- Création de la table des tâches (SANS contraintes étrangères)
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  status ENUM('todo', 'in_progress', 'done', 'cancelled') DEFAULT 'todo',
  assignee_id INT,
  project_id INT,
  creator_id INT NOT NULL,
  due_date DATE,
  start_date DATE,
  end_date DATE,
  estimated_hours DECIMAL(5,2),
  actual_hours DECIMAL(5,2) DEFAULT 0,
  progress INT DEFAULT 0,
  tags JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_assignee (assignee_id),
  INDEX idx_project (project_id),
  INDEX idx_status (status),
  INDEX idx_priority (priority),
  INDEX idx_due_date (due_date)
);

-- Insertion de tâches d'exemple
INSERT INTO tasks (title, description, priority, status, assignee_id, project_id, creator_id, due_date, start_date, estimated_hours, tags) VALUES
('Dashboard design review', 'Revoir l\'interface du dashboard', 'high', 'in_progress', 1, 1, 1, '2024-03-25', '2024-03-20', 8.0, '["design", "review"]'),
('API endpoints', 'Créer les routes RESTful', 'high', 'todo', 2, 1, 1, '2024-03-28', '2024-03-23', 12.0, '["backend', "api"]'),
('Database schema', 'Définir les schéma de la base de données', 'medium', 'in_progress', 3, 2, 1, '2024-03-30', '2024-03-22', 6.0, '["database', "schema"]'),
('UI components', 'Créer les composants réutilisables', 'medium', 'todo', 1, 2, 1, '2024-04-02', '2024-03-24', 10.0, '["frontend", "components"]'),
('Testing', 'Écrire les tests unitaires', 'low', 'todo', 2, 2, 1, '2024-04-05', '2024-03-26', 8.0, '["testing', "qa"]'),
('Documentation', 'Rédiger la documentation technique', 'low', 'done', 3, 3, 1, '2024-03-22', '2024-03-18', 4.0, '["docs', "technical"]');

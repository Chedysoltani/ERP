-- Création de la table projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    team VARCHAR(100) NOT NULL,
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    start_date DATE,
    end_date DATE,
    budget DECIMAL(12, 2) DEFAULT 0.00,
    progress INT DEFAULT 0,
    status ENUM('active', 'completed', 'paused', 'cancelled') DEFAULT 'active',
    manager_id INT NOT NULL,
    deadline DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_manager_id (manager_id),
    INDEX idx_status (status),
    INDEX idx_team (team),
    FOREIGN KEY (manager_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insertion de données de test
INSERT INTO projects (name, description, team, priority, start_date, end_date, budget, progress, status, manager_id, deadline) VALUES
('Formation Angular Avancé', 'Formation interne sur Angular avancé pour les développeurs', 'Équipe A', 'high', '2024-01-15', '2024-03-25', 15000.00, 75, 'active', 1, '2024-03-25'),
('Migration Cloud Infrastructure', 'Migration de l''infrastructure vers le cloud AWS', 'Équipe B', 'medium', '2024-02-01', '2024-04-15', 25000.00, 45, 'active', 1, '2024-04-15'),
('E-learning Platform V2', 'Refonte complète de la plateforme e-learning', 'Équipe C', 'high', '2024-01-01', '2024-06-30', 35000.00, 30, 'active', 1, '2024-06-30'),
('Application Mobile CRM', 'Développement d''une application mobile CRM', 'Équipe A', 'low', '2024-03-01', '2024-08-31', 20000.00, 10, 'active', 1, '2024-08-31'),
('Optimisation Base de Données', 'Optimisation des performances de la base de données', 'Équipe B', 'medium', '2024-02-15', '2024-05-15', 12000.00, 60, 'active', 1, '2024-05-15');

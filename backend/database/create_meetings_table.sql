-- Création de la table des réunions
CREATE TABLE IF NOT EXISTS meetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  date_time DATETIME NOT NULL,
  duration VARCHAR(20) NOT NULL DEFAULT '1h',
  location VARCHAR(255) NOT NULL,
  type ENUM('team', 'client', 'technical', 'review') DEFAULT 'team',
  status ENUM('upcoming', 'scheduled', 'completed', 'cancelled') DEFAULT 'upcoming',
  participants INT DEFAULT 1,
  creator_id INT NOT NULL,
  agenda JSON,
  notes TEXT,
  meeting_link VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_creator (creator_id),
  INDEX idx_date_time (date_time),
  INDEX idx_status (status),
  INDEX idx_type (type)
);

-- Insertion de réunions d'exemple
INSERT INTO meetings (title, description, date_time, duration, location, type, status, participants, creator_id, agenda, notes) VALUES
('Réunion d''équipe', 'Point hebdomadaire sur l''avancement des projets', '2026-03-25 10:00:00', '1h', 'Salle A', 'team', 'upcoming', 8, 1, 
'["Revue des projets en cours", "Point sur les blocages", "Questions et discussion libre"]', 
'Préparer les rapports d''avancement'),

('Réunion avec le client', 'Démonstration de la v2 et recueil des feedbacks', '2026-03-26 14:00:00', '2h', 'Visioconférence', 'client', 'scheduled', 4, 1,
'["Démonstration de la v2", "Feedback et retours client", "Prochaines étapes"]',
'Préparer la démo et l''environnement de démo'),

('Point technique', 'Discussion sur l''architecture et les optimisations', '2026-03-27 16:00:00', '30min', 'Visioconférence', 'technical', 'scheduled', 2, 1,
'["Architecture review", "Performance optimisation", "Décisions techniques"]',
'Revoir les performances et préparer les propositions'),

('Revue de projet', 'Bilan mensuel du projet E-learning', '2026-03-28 11:00:00', '1h30', 'Salle B', 'review', 'upcoming', 6, 1,
'["État d''avancement actuel", "Budget et délais", "Risques et solutions", "Prochaines livraisons"]',
'Préparer les KPIs et le rapport d''avancement');

-- Script SQL pour créer les tables de compétences en utilisant la table users existante
-- Exécuter ce script dans MySQL: mysql -u root -p < database_name < create_skills_for_users.sql

-- Vérifier d'abord si la table users existe et ajouter des employés de démonstration si nécessaire
INSERT IGNORE INTO users (id, prenom, nom, email, password, role) VALUES
(12, 'Jean', 'Dupont', 'jean.dupont@company.com', 'password123', 'employee'),
(13, 'Marie', 'Martin', 'marie.martin@company.com', 'password123', 'employee'),
(14, 'Pierre', 'Durand', 'pierre.durand@company.com', 'password123', 'employee');

-- Table pour les compétences des employés (utilisant la table users)
CREATE TABLE IF NOT EXISTS employee_skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  category ENUM('technical', 'soft', 'language', 'certification') NOT NULL,
  level INT NOT NULL CHECK (level >= 1 AND level <= 5),
  years_experience DECIMAL(4,1) NOT NULL DEFAULT 0,
  validated BOOLEAN DEFAULT FALSE,
  last_used DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_employee_skills_employee_id (employee_id),
  INDEX idx_employee_skills_category (category)
);

-- Table pour les technologies des employés
CREATE TABLE IF NOT EXISTS employee_technologies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  category ENUM('frontend', 'backend', 'database', 'devops', 'mobile', 'ai', 'other') NOT NULL,
  proficiency ENUM('basic', 'intermediate', 'advanced', 'expert') NOT NULL,
  projects INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_employee_technologies_employee_id (employee_id),
  INDEX idx_employee_technologies_category (category)
);

-- Table pour les spécialités des employés
CREATE TABLE IF NOT EXISTS employee_specialities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  domain VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_employee_specialities_employee_id (employee_id),
  INDEX idx_employee_specialities_domain (domain)
);

-- Insérer des données de démonstration pour les employés existants

-- Compétences pour l'employé 12 (Jean Dupont)
INSERT IGNORE INTO employee_skills (employee_id, name, category, level, years_experience, validated, last_used) VALUES
(12, 'JavaScript', 'technical', 4, 3.0, TRUE, CURDATE()),
(12, 'React', 'technical', 4, 2.0, TRUE, CURDATE()),
(12, 'Node.js', 'technical', 3, 2.0, FALSE, CURDATE() - INTERVAL 1 MONTH),
(12, 'Communication', 'soft', 4, 5.0, TRUE, CURDATE()),
(12, 'Anglais', 'language', 3, 2.0, TRUE, CURDATE());

-- Technologies pour l'employé 12
INSERT IGNORE INTO employee_technologies (employee_id, name, category, proficiency, projects) VALUES
(12, 'Angular', 'frontend', 'advanced', 5),
(12, 'React', 'frontend', 'expert', 8),
(12, 'Docker', 'devops', 'intermediate', 2),
(12, 'MySQL', 'database', 'intermediate', 3),
(12, 'Git', 'other', 'expert', 10);

-- Spécialités pour l'employé 12
INSERT IGNORE INTO employee_specialities (employee_id, name, domain, description) VALUES
(12, 'Développement Frontend', 'Informatique', 'Spécialisé dans les applications web modernes avec React et Angular');

-- Compétences pour l'employé 13 (Marie Martin)
INSERT IGNORE INTO employee_skills (employee_id, name, category, level, years_experience, validated, last_used) VALUES
(13, 'JavaScript', 'technical', 3, 2.0, TRUE, CURDATE()),
(13, 'React', 'technical', 4, 3.0, TRUE, CURDATE()),
(13, 'Vue.js', 'technical', 3, 1.0, FALSE, CURDATE() - INTERVAL 2 MONTH),
(13, 'UI/UX Design', 'soft', 4, 4.0, TRUE, CURDATE()),
(13, 'Français', 'language', 5, 0.0, TRUE, CURDATE());

-- Technologies pour l'employé 13
INSERT IGNORE INTO employee_technologies (employee_id, name, category, proficiency, projects) VALUES
(13, 'React', 'frontend', 'expert', 6),
(13, 'Vue.js', 'frontend', 'intermediate', 3),
(13, 'Figma', 'other', 'advanced', 4),
(13, 'CSS/Sass', 'frontend', 'advanced', 7);

-- Spécialités pour l'employé 13
INSERT IGNORE INTO employee_specialities (employee_id, name, domain, description) VALUES
(13, 'Design UX/UI', 'Informatique', 'Spécialisée dans le design d\'interfaces utilisateur et l\'expérience utilisateur');

-- Compétences pour l'employé 14 (Pierre Durand)
INSERT IGNORE INTO employee_skills (employee_id, name, category, level, years_experience, validated, last_used) VALUES
(14, 'Python', 'technical', 4, 4.0, TRUE, CURDATE()),
(14, 'Node.js', 'technical', 4, 3.0, TRUE, CURDATE()),
(14, 'PostgreSQL', 'technical', 3, 2.0, FALSE, CURDATE() - INTERVAL 1 MONTH),
(14, 'Docker', 'technical', 3, 2.0, TRUE, CURDATE()),
(14, 'Gestion de projet', 'soft', 3, 1.0, FALSE, CURDATE());

-- Technologies pour l'employé 14
INSERT IGNORE INTO employee_technologies (employee_id, name, category, proficiency, projects) VALUES
(14, 'Node.js', 'backend', 'expert', 7),
(14, 'Docker', 'devops', 'intermediate', 3),
(14, 'Kubernetes', 'devops', 'basic', 1),
(14, 'MongoDB', 'database', 'intermediate', 2);

-- Spécialités pour l'employé 14
INSERT IGNORE INTO employee_specialities (employee_id, name, domain, description) VALUES
(14, 'Développement Backend', 'Informatique', 'Spécialisé dans les API et services backend avec Node.js et Python');

-- Afficher confirmation
SELECT 'Tables de compétences créées avec succès en utilisant la table users existante!' as message;

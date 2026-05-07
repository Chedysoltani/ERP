-- Supprimer et recréer les tables de compétences avec les bonnes clés étrangères
DROP TABLE IF EXISTS employee_specialities;
DROP TABLE IF EXISTS employee_technologies;
DROP TABLE IF EXISTS employee_skills;

-- Recréer les tables avec les clés étrangères vers users
CREATE TABLE employee_skills (
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

CREATE TABLE employee_technologies (
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

CREATE TABLE employee_specialities (
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

SELECT 'Tables recréées avec succès!' as message;

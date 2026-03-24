-- Ajouter la colonne role à la table users si elle n'existe pas
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS role ENUM('admin', 'manager', 'employee') DEFAULT 'employee' AFTER email;

-- Ajouter la colonne actif si elle n'existe pas
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS actif TINYINT(1) DEFAULT 1 AFTER role;

-- Ajouter la colonne date_creation si elle n'existe pas
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP AFTER actif;

-- Mettre à jour les utilisateurs existants pour avoir un rôle par défaut
UPDATE users SET role = 'employee' WHERE role IS NULL OR role = '';

-- Mettre à jour le premier utilisateur comme manager
UPDATE users SET role = 'manager' WHERE id = 1;

-- Vérifier la structure de la table
DESCRIBE users;

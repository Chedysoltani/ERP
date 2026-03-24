-- Base de données pour le système ERP SIT

-- Création de la base de données
CREATE DATABASE IF NOT EXISTS sit_erp_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sit_erp_db;

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    telephone VARCHAR(20),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    actif BOOLEAN DEFAULT TRUE
);

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des produits
CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(200) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    quantite_stock INT DEFAULT 0,
    categorie_id INT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    actif BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (categorie_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Table des commandes
CREATE TABLE IF NOT EXISTS commandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT NOT NULL,
    montant_total DECIMAL(10, 2) NOT NULL,
    statut ENUM('en_attente', 'confirmee', 'expediee', 'livree', 'annulee') DEFAULT 'en_attente',
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_livraison DATE,
    FOREIGN KEY (utilisateur_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des détails de commande
CREATE TABLE IF NOT EXISTS commande_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commande_id INT NOT NULL,
    produit_id INT NOT NULL,
    quantite INT NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes(id) ON DELETE CASCADE,
    FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE
);

-- Insertion de données de test
INSERT INTO users (nom, prenom, email, password, telephone) VALUES
('Dupont', 'Jean', 'jean.dupont@email.com', 'password123', '0123456789'),
('Martin', 'Sophie', 'sophie.martin@email.com', 'password456', '0987654321'),
('Bernard', 'Pierre', 'pierre.bernard@email.com', 'password789', '0612345678');

INSERT INTO categories (nom, description) VALUES
('Électronique', 'Appareils électroniques et gadgets'),
('Vêtements', 'Habillement et accessoires'),
('Livres', 'Livres et publications'),
('Maison', 'Articles pour la maison et jardin');

INSERT INTO produits (nom, description, prix, quantite_stock, categorie_id) VALUES
('Smartphone Android', 'Dernier modèle avec écran 6.5 pouces', 699.99, 50, 1),
('Laptop Pro', 'Ordinateur portable 15 pouces, 16GB RAM', 1299.99, 25, 1),
('T-shirt Cotton', 'T-shirt 100% coton, plusieurs couleurs', 19.99, 100, 2),
('Jean Slim', 'Jean slim fit, taille 32-38', 49.99, 75, 2),
('Roman Best-seller', 'Dernier roman à la mode', 24.99, 200, 3),
('Guide Cuisine', 'Livre de recettes internationales', 29.99, 150, 3),
('Lampe LED', 'Lampe de bureau LED réglable', 34.99, 60, 4),
('Plante verte', 'Plante d intérieur facile d entretien', 15.99, 80, 4);

-- Index pour optimiser les performances
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_produits_categorie ON produits(categorie_id);
CREATE INDEX idx_commandes_utilisateur ON commandes(utilisateur_id);
CREATE INDEX idx_commande_details_commande ON commande_details(commande_id);
CREATE INDEX idx_commande_details_produit ON commande_details(produit_id);

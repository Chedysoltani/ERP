const db = require('../config/database');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

class User {
  static async getAll() {
    try {
      const query = 'SELECT id, nom, prenom, email, telephone, date_creation, actif FROM users WHERE actif = 1 ORDER BY date_creation DESC';
      return await db.query(query);
    } catch (error) {
      throw new Error('Erreur lors de la récupération des utilisateurs: ' + error.message);
    }
  }

  static async getById(id) {
    try {
      const query = 'SELECT id, nom, prenom, email, telephone, date_creation, actif FROM users WHERE id = ? AND actif = 1';
      const users = await db.query(query, [id]);
      return users[0] || null;
    } catch (error) {
      throw new Error('Erreur lors de la récupération de l\'utilisateur: ' + error.message);
    }
  }

  static async create(userData) {
    try {
      const { nom, prenom, email, password, telephone } = userData;
      
      // Vérifier si l'email existe déjà
      const existingUser = await this.getByEmail(email);
      if (existingUser) {
        throw new Error('Cet email est déjà utilisé');
      }
      
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const query = 'INSERT INTO users (nom, prenom, email, password, telephone) VALUES (?, ?, ?, ?, ?)';
      const result = await db.query(query, [nom, prenom, email, hashedPassword, telephone]);
      return result.insertId;
    } catch (error) {
      throw new Error('Erreur lors de la création de l\'utilisateur: ' + error.message);
    }
  }

  static async update(id, userData) {
    try {
      const { nom, prenom, email, telephone } = userData;
      const query = 'UPDATE users SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?';
      const result = await db.query(query, [nom, prenom, email, telephone, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Erreur lors de la mise à jour de l\'utilisateur: ' + error.message);
    }
  }

  static async delete(id) {
    try {
      const query = 'UPDATE users SET actif = 0 WHERE id = ?';
      const result = await db.query(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Erreur lors de la suppression de l\'utilisateur: ' + error.message);
    }
  }

  static async getByEmail(email) {
    try {
      const query = 'SELECT * FROM users WHERE email = ? AND actif = 1';
      const users = await db.query(query, [email]);
      return users[0] || null;
    } catch (error) {
      throw new Error('Erreur lors de la recherche par email: ' + error.message);
    }
  }

  static async validatePassword(password, hashedPassword) {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      throw new Error('Erreur lors de la validation du mot de passe: ' + error.message);
    }
  }
}

module.exports = User;

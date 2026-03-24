const User = require('../models/User');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.getAll();
      res.json({
        success: true,
        data: users,
        message: 'Utilisateurs récupérés avec succès'
      });
    } catch (error) {
      console.error('Erreur getAllUsers:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.getById(id);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Utilisateur non trouvé'
        });
      }

      res.json({
        success: true,
        data: user,
        message: 'Utilisateur récupéré avec succès'
      });
    } catch (error) {
      console.error('Erreur getUserById:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createUser(req, res) {
    try {
      const userData = req.body;
      
      // Validation basique
      if (!userData.nom || !userData.prenom || !userData.email || !userData.password) {
        return res.status(400).json({
          success: false,
          message: 'Les champs nom, prénom, email et password sont obligatoires'
        });
      }

      const userId = await User.create(userData);
      
      res.status(201).json({
        success: true,
        data: { id: userId },
        message: 'Utilisateur créé avec succès'
      });
    } catch (error) {
      console.error('Erreur createUser:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      
      // Validation basique
      if (!userData.nom || !userData.prenom || !userData.email) {
        return res.status(400).json({
          success: false,
          message: 'Les champs nom, prénom et email sont obligatoires'
        });
      }

      const updated = await User.update(id, userData);
      
      if (!updated) {
        return res.status(404).json({
          success: false,
          message: 'Utilisateur non trouvé'
        });
      }

      res.json({
        success: true,
        message: 'Utilisateur mis à jour avec succès'
      });
    } catch (error) {
      console.error('Erreur updateUser:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.delete(id);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: 'Utilisateur non trouvé'
        });
      }

      res.json({
        success: true,
        message: 'Utilisateur supprimé avec succès'
      });
    } catch (error) {
      console.error('Erreur deleteUser:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      
      // Validation basique
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Email et mot de passe sont requis'
        });
      }

      // Récupérer l'utilisateur par email
      const user = await User.getByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Email ou mot de passe incorrect'
        });
      }

      // Valider le mot de passe
      const isValidPassword = await User.validatePassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          message: 'Email ou mot de passe incorrect'
        });
      }

      // Retourner les informations utilisateur (sans le mot de passe)
      res.json({
        success: true,
        message: 'Connexion réussie',
        data: {
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          telephone: user.telephone,
          date_creation: user.date_creation
        }
      });
    } catch (error) {
      console.error('Erreur login:', error);
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = UserController;

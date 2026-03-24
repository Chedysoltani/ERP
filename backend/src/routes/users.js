const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Routes pour les utilisateurs
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.post('/login', UserController.login);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;

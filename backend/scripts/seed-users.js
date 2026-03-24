const bcrypt = require('bcryptjs');
const db = require('../src/config/database');

const users = [
  {
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@sit.com',
    password: 'admin123',
    telephone: '+33612345678'
  },
  {
    nom: 'Martin',
    prenom: 'Marie',
    email: 'marie.martin@sit.com',
    password: 'manager123',
    telephone: '+33687654321'
  },
  {
    nom: 'Bernard',
    prenom: 'Pierre',
    email: 'pierre.bernard@sit.com',
    password: 'employee123',
    telephone: '+33611223344'
  },
  {
    nom: 'Laurent',
    prenom: 'Sophie',
    email: 'sophie.laurent@sit.com',
    password: 'employee123',
    telephone: '+33655443322'
  }
];

async function seedUsers() {
  try {
    console.log('Début de l\'ajout des utilisateurs de test...');
    
    for (const user of users) {
      // Hasher le mot de passe
      const hashedPassword = await bcrypt.hash(user.password, 10);
      
      // Insérer l'utilisateur
      const query = 'INSERT INTO users (nom, prenom, email, password, telephone) VALUES (?, ?, ?, ?, ?)';
      await db.query(query, [user.nom, user.prenom, user.email, hashedPassword, user.telephone]);
      
      console.log(`✅ Utilisateur créé: ${user.prenom} ${user.nom} (${user.email})`);
    }
    
    console.log('\n🎉 Tous les utilisateurs de test ont été créés avec succès!');
    console.log('\nIdentifiants de test:');
    console.log('Admin: jean.dupont@sit.com / admin123');
    console.log('Manager: marie.martin@sit.com / manager123');
    console.log('Employee: pierre.bernard@sit.com / employee123');
    console.log('Employee: sophie.laurent@sit.com / employee123');
    
  } catch (error) {
    console.error('Erreur lors de la création des utilisateurs:', error.message);
  } finally {
    process.exit();
  }
}

seedUsers();

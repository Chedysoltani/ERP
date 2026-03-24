const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Configuration de la base de données
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'erp_system'
};

async function fixUsersTable() {
  let connection;
  
  try {
    // Connexion à la base de données
    connection = await mysql.createConnection(dbConfig);
    console.log('Connecté à la base de données MySQL');

    // Lire le fichier SQL de correction
    const sqlFilePath = path.join(__dirname, '../database/fix-users-table.sql');
    const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8');

    // Exécuter les requêtes SQL
    const queries = sqlQuery.split(';').filter(query => query.trim().length > 0);
    
    for (const query of queries) {
      if (query.trim()) {
        await connection.execute(query);
        console.log('Requête exécutée avec succès');
      }
    }

    console.log('Table des utilisateurs corrigée avec succès !');

  } catch (error) {
    console.error('Erreur lors de la correction de la table des utilisateurs:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
      console.log('Connexion à la base de données fermée');
    }
  }
}

// Exécuter la fonction
if (require.main === module) {
  fixUsersTable()
    .then(() => {
      console.log('Correction terminée avec succès');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Échec de la correction:', error);
      process.exit(1);
    });
}

module.exports = { fixUsersTable };

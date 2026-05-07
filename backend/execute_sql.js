// Script pour exécuter des commandes SQL
const db = require('./src/config/database');
const fs = require('fs');

async function executeSQLFile(filename) {
  console.log(`🔄 Exécution du fichier SQL: ${filename}`);
  
  try {
    const sql = fs.readFileSync(filename, 'utf8');
    const statements = sql.split(';').filter(stmt => stmt.trim());
    
    for (const statement of statements) {
      if (statement.trim()) {
        await db.query(statement);
        console.log('✅ Exécuté:', statement.substring(0, 50) + '...');
      }
    }
    
    console.log('✅ Fichier SQL exécuté avec succès!');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'exécution:', error.message);
  } finally {
    process.exit(0);
  }
}

executeSQLFile('drop_and_recreate_skills.sql');

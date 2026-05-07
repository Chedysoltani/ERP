// Script de diagnostic de la base de données
const db = require('./src/config/database');

async function checkDatabase() {
  console.log('🔍 Diagnostic de la base de données...\n');
  
  try {
    // Vérifier la connexion
    console.log('1️⃣ Test de connexion à la base de données...');
    await db.query('SELECT 1');
    console.log('✅ Connexion réussie\n');
    
    // Vérifier les tables existantes
    console.log('2️⃣ Vérification des tables...');
    const tablesResult = await db.query('SHOW TABLES');
    const tableNames = tablesResult.map(t => Object.values(t)[0]);
    console.log('Tables existantes:', tableNames);
    console.log('');
    
    // Vérifier si la table users existe
    console.log('3️⃣ Vérification de la table users...');
    const usersTable = await db.query('DESCRIBE users');
    console.log('Structure de la table users:');
    usersTable.forEach(col => {
      console.log(`  - ${col.Field}: ${col.Type} ${col.Null === 'NO' ? 'NOT NULL' : ''} ${col.Key ? `(${col.Key})` : ''}`);
    });
    console.log('');
    
    // Vérifier les données dans users
    console.log('4️⃣ Vérification des données dans users...');
    const usersData = await db.query('SELECT id, prenom, nom, email, role FROM users LIMIT 5');
    console.log('Données users:');
    usersData.forEach(user => {
      console.log(`  - ID: ${user.id}, ${user.prenom} ${user.nom} (${user.email}) - ${user.role}`);
    });
    console.log('');
    
    // Vérifier les tables de compétences
    console.log('5️⃣ Vérification des tables de compétences...');
    try {
      const skillsTable = await db.query('DESCRIBE employee_skills');
      console.log('✅ Table employee_skills existe');
      
      // Vérifier les données dans employee_skills
      const skillsData = await db.query('SELECT * FROM employee_skills LIMIT 3');
      console.log(`📊 ${skillsData.length} compétences trouvées`);
      skillsData.forEach(skill => {
        console.log(`  - ${skill.name} (niveau ${skill.level}) pour employé ${skill.employee_id}`);
      });
    } catch (error) {
      console.log('❌ Table employee_skills n\'existe pas:', error.message);
    }
    console.log('');
    
    try {
      const techTable = await db.query('DESCRIBE employee_technologies');
      console.log('✅ Table employee_technologies existe');
      
      const techData = await db.query('SELECT * FROM employee_technologies LIMIT 3');
      console.log(`📊 ${techData.length} technologies trouvées`);
    } catch (error) {
      console.log('❌ Table employee_technologies n\'existe pas:', error.message);
    }
    console.log('');
    
    try {
      const specTable = await db.query('DESCRIBE employee_specialities');
      console.log('✅ Table employee_specialities existe');
      
      const specData = await db.query('SELECT * FROM employee_specialities LIMIT 3');
      console.log(`📊 ${specData.length} spécialités trouvées`);
    } catch (error) {
      console.log('❌ Table employee_specialities n\'existe pas:', error.message);
    }
    
    console.log('\n✅ Diagnostic terminé!');
    
  } catch (error) {
    console.error('❌ Erreur de diagnostic:', error.message);
  } finally {
    process.exit(0);
  }
}

checkDatabase();

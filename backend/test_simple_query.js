// Test simple de la requête SQL
const db = require('./src/config/database');

async function testSimpleQuery() {
  console.log('🧪 Test de la requête SQL simple...\n');
  
  try {
    // Test 1: Vérifier si l'employé 2 existe
    console.log('1️⃣ Test: Vérification de l\'employé 2');
    const user = await db.query('SELECT id, prenom, nom FROM users WHERE id = ?', [2]);
    console.log('Résultat:', user);
    console.log('');
    
    // Test 2: Vérifier les compétences de l'employé 2
    console.log('2️⃣ Test: Compétences de l\'employé 2');
    const skills = await db.query('SELECT * FROM employee_skills WHERE employee_id = ?', [2]);
    console.log('Compétences trouvées:', skills);
    console.log('');
    
    // Test 3: Requête JSON simple
    console.log('3️⃣ Test: Requête JSON simple');
    const jsonSkills = await db.query(`
      SELECT 
        JSON_ARRAYAGG(JSON_OBJECT(
          'id', s.id,
          'name', s.name,
          'level', s.level
        )) as skills_json
      FROM employee_skills s 
      WHERE s.employee_id = ?
    `, [2]);
    console.log('JSON Skills:', jsonSkills);
    console.log('');
    
    // Test 4: Requête complète simplifiée
    console.log('4️⃣ Test: Requête complète simplifiée');
    const fullQuery = await db.query(`
      SELECT 
        u.id,
        u.prenom,
        u.nom,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', s.id,
            'name', s.name,
            'level', s.level
          )
        ) FROM employee_skills s WHERE s.employee_id = u.id) as skills
      FROM users u
      WHERE u.id = ?
    `, [2]);
    console.log('Requête complète:', fullQuery);
    console.log('');
    
    console.log('✅ Tests SQL terminés!');
    
  } catch (error) {
    console.error('❌ Erreur SQL:', error.message);
    console.error('Stack:', error.stack);
  } finally {
    process.exit(0);
  }
}

testSimpleQuery();

// Test direct de la route GET
const db = require('./src/config/database');

async function testGetRoute() {
  console.log('🧪 Test direct de la route GET...\n');
  
  try {
    const employeeId = 2;
    
    // Version simplifiée de la requête
    console.log('1️⃣ Test: Requête simplifiée');
    const simpleQuery = `
      SELECT 
        u.id,
        u.prenom,
        u.nom,
        '[]' as skills,
        '[]' as technologies,
        '[]' as specialities
      FROM users u
      WHERE u.id = ?
    `;
    
    const simpleResult = await db.query(simpleQuery, [employeeId]);
    console.log('Résultat simplifié:', simpleResult);
    console.log('');
    
    // Version avec une sous-requête
    console.log('2️⃣ Test: Avec une sous-requête skills');
    const oneSubQuery = `
      SELECT 
        u.id,
        u.prenom,
        u.nom,
        (SELECT IFNULL(JSON_ARRAYAGG(
          JSON_OBJECT('id', s.id, 'name', s.name, 'level', s.level)
        ), '[]') FROM employee_skills s WHERE s.employee_id = u.id) as skills,
        '[]' as technologies,
        '[]' as specialities
      FROM users u
      WHERE u.id = ?
    `;
    
    const oneSubResult = await db.query(oneSubQuery, [employeeId]);
    console.log('Résultat une sous-requête:', oneSubResult);
    console.log('');
    
    // Version complète
    console.log('3️⃣ Test: Requête complète');
    const fullQuery = `
      SELECT 
        u.id,
        u.prenom,
        u.nom,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', s.id,
              'name', s.name,
              'category', s.category,
              'level', s.level,
              'yearsExperience', s.years_experience,
              'validated', s.validated,
              'lastUsed', s.last_used
            )
          ) FROM employee_skills s WHERE s.employee_id = u.id),
          '[]'
        ) as skills,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', t.id,
              'name', t.name,
              'category', t.category,
              'proficiency', t.proficiency,
              'projects', t.projects
            )
          ) FROM employee_technologies t WHERE t.employee_id = u.id),
          '[]'
        ) as technologies,
        IFNULL(
          (SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', sp.id,
              'name', sp.name,
              'domain', sp.domain,
              'description', sp.description
            )
          ) FROM employee_specialities sp WHERE sp.employee_id = u.id),
          '[]'
        ) as specialities
      FROM users u
      WHERE u.id = ?
    `;
    
    const fullResult = await db.query(fullQuery, [employeeId]);
    console.log('Résultat complet:', fullResult);
    console.log('');
    
    // Simulation du traitement dans la route
    console.log('4️⃣ Test: Simulation du traitement');
    if (fullResult.length > 0) {
      const employee = fullResult[0];
      console.log('Employee brut:', employee);
      
      const skills = employee.skills ? JSON.parse(employee.skills) : [];
      const technologies = employee.technologies ? JSON.parse(employee.technologies) : [];
      const specialities = employee.specialities ? JSON.parse(employee.specialities) : [];
      
      console.log('Skills parsées:', skills);
      console.log('Technologies parsées:', technologies);
      console.log('Specialities parsées:', specialities);
      
      const profileData = {
        employeeId: parseInt(employeeId),
        skills,
        technologies,
        specialities,
        overallScore: 75,
        lastUpdated: new Date(),
        strengths: ['Expertise en JavaScript et React'],
        improvementAreas: ['Améliorer les compétences backend']
      };
      
      console.log('Profile final:', profileData);
    }
    
    console.log('✅ Test terminé!');
    
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    console.error('Stack:', error.stack);
  } finally {
    process.exit(0);
  }
}

testGetRoute();

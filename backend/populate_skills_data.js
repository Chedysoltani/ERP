// Script pour peupler les tables de compétences avec les employés existants
const db = require('./src/config/database');

async function populateSkillsData() {
  console.log('📊 Peuplement des tables de compétences...\n');
  
  try {
    // Récupérer les employés existants
    console.log('1️⃣ Récupération des employés existants...');
    const users = await db.query('SELECT id, prenom, nom, role FROM users WHERE role = "employee"');
    console.log(`👥 ${users.length} employés trouvés`);
    
    if (users.length === 0) {
      console.log('❌ Aucun employé trouvé dans la table users');
      return;
    }
    
    // Pour chaque employé, ajouter des compétences de démonstration
    for (const user of users) {
      console.log(`\n🎯 Traitement de l'employé: ${user.prenom} ${user.nom} (ID: ${user.id})`);
      
      // Compétences techniques
      const skills = [
        { name: 'JavaScript', category: 'technical', level: 4, yearsExperience: 3.0, validated: true },
        { name: 'React', category: 'technical', level: 3, yearsExperience: 2.0, validated: true },
        { name: 'Node.js', category: 'technical', level: 3, yearsExperience: 1.5, validated: false },
        { name: 'Communication', category: 'soft', level: 4, yearsExperience: 5.0, validated: true },
        { name: 'Anglais', category: 'language', level: 3, yearsExperience: 2.0, validated: true }
      ];
      
      for (const skill of skills) {
        await db.query(
          'INSERT IGNORE INTO employee_skills (employee_id, name, category, level, years_experience, validated, last_used) VALUES (?, ?, ?, ?, ?, ?, CURDATE())',
          [user.id, skill.name, skill.category, skill.level, skill.yearsExperience, skill.validated]
        );
        console.log(`  ✅ Compétence ajoutée: ${skill.name} (niveau ${skill.level})`);
      }
      
      // Technologies
      const technologies = [
        { name: 'React', category: 'frontend', proficiency: 'advanced', projects: 5 },
        { name: 'Node.js', category: 'backend', proficiency: 'intermediate', projects: 3 },
        { name: 'Docker', category: 'devops', proficiency: 'basic', projects: 1 },
        { name: 'Git', category: 'other', proficiency: 'expert', projects: 8 }
      ];
      
      for (const tech of technologies) {
        await db.query(
          'INSERT IGNORE INTO employee_technologies (employee_id, name, category, proficiency, projects) VALUES (?, ?, ?, ?, ?)',
          [user.id, tech.name, tech.category, tech.proficiency, tech.projects]
        );
        console.log(`  ✅ Technologie ajoutée: ${tech.name} (${tech.proficiency})`);
      }
      
      // Spécialités
      const specialities = [
        {
          name: 'Développement Web',
          domain: 'Informatique',
          description: `Spécialisé dans le développement d'applications web modernes`
        }
      ];
      
      for (const spec of specialities) {
        await db.query(
          'INSERT IGNORE INTO employee_specialities (employee_id, name, domain, description) VALUES (?, ?, ?, ?)',
          [user.id, spec.name, spec.domain, spec.description]
        );
        console.log(`  ✅ Spécialité ajoutée: ${spec.name}`);
      }
    }
    
    // Vérification finale
    console.log('\n📈 Vérification finale...');
    
    const skillsCount = await db.query('SELECT COUNT(*) as count FROM employee_skills');
    const techCount = await db.query('SELECT COUNT(*) as count FROM employee_technologies');
    const specCount = await db.query('SELECT COUNT(*) as count FROM employee_specialities');
    
    console.log(`📊 ${skillsCount[0].count} compétences totales`);
    console.log(`📊 ${techCount[0].count} technologies totales`);
    console.log(`📊 ${specCount[0].count} spécialités totales`);
    
    console.log('\n✅ Peuplement terminé avec succès!');
    
  } catch (error) {
    console.error('❌ Erreur lors du peuplement:', error.message);
  } finally {
    process.exit(0);
  }
}

populateSkillsData();

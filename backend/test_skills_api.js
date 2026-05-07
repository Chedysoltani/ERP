// Script de test pour l'API des compétences
const http = require('http');

// Fonction pour faire des requêtes HTTP
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve({ statusCode: res.statusCode, data: result });
        } catch (e) {
          resolve({ statusCode: res.statusCode, data: body });
        }
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Tests
async function testSkillsAPI() {
  console.log('🧪 Test de l\'API des compétences...\n');
  
  try {
    // Test 1: Récupérer le profil de compétences de l'employé 12
    console.log('1️⃣ Test GET /api/employee/12/skills');
    const getProfile = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/12/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', getProfile.statusCode);
    console.log('Response:', JSON.stringify(getProfile.data, null, 2));
    console.log('\n');
    
    // Test 2: Ajouter une compétence
    console.log('2️⃣ Test POST /api/employee/12/skills');
    const addSkill = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/12/skills',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, {
      name: 'TypeScript',
      category: 'technical',
      level: 3,
      yearsExperience: 1.5,
      validated: false
    });
    
    console.log('Status:', addSkill.statusCode);
    console.log('Response:', JSON.stringify(addSkill.data, null, 2));
    console.log('\n');
    
    // Test 3: Récupérer à nouveau le profil pour voir la nouvelle compétence
    console.log('3️⃣ Test GET /api/employee/12/skills (après ajout)');
    const getProfileAfter = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/12/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', getProfileAfter.statusCode);
    console.log('Response:', JSON.stringify(getProfileAfter.data, null, 2));
    console.log('\n');
    
    console.log('✅ Tests terminés avec succès!');
    
  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.message);
  }
}

// Exécuter les tests
testSkillsAPI();

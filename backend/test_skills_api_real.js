// Script de test pour l'API des compétences avec des IDs réels
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
  console.log('🧪 Test de l\'API des compétences avec IDs réels...\n');
  
  try {
    // Test avec ID 2 (Marie Martin - employé existant)
    console.log('1️⃣ Test GET /api/employee/2/skills (Marie Martin)');
    const getProfile = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/2/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', getProfile.statusCode);
    console.log('Response:', JSON.stringify(getProfile.data, null, 2));
    console.log('\n');
    
    // Test avec ID 3 (Pierre Bernard - employé existant)
    console.log('2️⃣ Test GET /api/employee/3/skills (Pierre Bernard)');
    const getProfile3 = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/3/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', getProfile3.statusCode);
    console.log('Response:', JSON.stringify(getProfile3.data, null, 2));
    console.log('\n');
    
    // Test d'ajout de compétence pour l'employé 2
    console.log('3️⃣ Test POST /api/employee/2/skills (ajout TypeScript)');
    const addSkill = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/2/skills',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, {
      name: 'TypeScript',
      category: 'technical',
      level: 4,
      yearsExperience: 2.0,
      validated: true
    });
    
    console.log('Status:', addSkill.statusCode);
    console.log('Response:', JSON.stringify(addSkill.data, null, 2));
    console.log('\n');
    
    // Vérifier après ajout
    console.log('4️⃣ Test GET /api/employee/2/skills (après ajout)');
    const getProfileAfter = await makeRequest({
      hostname: 'localhost',
      port: 3001,
      path: '/api/employee/2/skills',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', getProfileAfter.statusCode);
    console.log('Response:', JSON.stringify(getProfileAfter.data, null, 2));
    console.log('\n');
    
    console.log('✅ Tests terminés!');
    
  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.message);
  }
}

// Exécuter les tests
testSkillsAPI();

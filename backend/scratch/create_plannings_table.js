const db = require('../src/config/database');

async function createPlanningsTable() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS plannings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        project_name VARCHAR(255) NOT NULL,
        description TEXT,
        simulation_data JSON NOT NULL,
        manager_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `;
    await db.query(sql);
    console.log('Table "plannings" créée ou déjà existante.');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la création de la table plannings:', error);
    process.exit(1);
  }
}

createPlanningsTable();

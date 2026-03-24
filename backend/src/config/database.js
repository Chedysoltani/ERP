const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'project_db',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Forcer l'utilisation de l'authentification par défaut
  charset: 'utf8mb4'
};

const pool = mysql.createPool(dbConfig);

module.exports = {
  pool,
  async getConnection() {
    return await pool.getConnection();
  },
  async query(sql, params) {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute(sql, params);
      return rows;
    } finally {
      connection.release();
    }
  }
};

const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const User = require('../models/User');
const db = require('../config/database');

// ── Init tables si elles n'existent pas ─────────────────────────────────────
async function ensureTables() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS admin_settings (
      key_name VARCHAR(100) PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  await db.query(`
    CREATE TABLE IF NOT EXISTS role_permissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      role ENUM('admin','manager','employee') NOT NULL,
      permission VARCHAR(100) NOT NULL,
      allowed TINYINT(1) NOT NULL DEFAULT 1,
      UNIQUE KEY uq_role_perm (role, permission)
    )
  `);
}
ensureTables().catch(() => {});

// ── STATS ────────────────────────────────────────────────────────────────────
router.get('/stats', auth, isAdmin, async (req, res) => {
  try {
    const totalUsersRows = await db.query('SELECT COUNT(*) as v FROM users');
    const activeEmpRows  = await db.query("SELECT COUNT(*) as v FROM users WHERE role='employee' AND actif=1");
    const activeMgrRows  = await db.query("SELECT COUNT(*) as v FROM users WHERE role='manager' AND actif=1");
    const totalAdminRows = await db.query("SELECT COUNT(*) as v FROM users WHERE role='admin'");
    const todayLoginRows = await db.query("SELECT COUNT(*) as v FROM users WHERE DATE(date_modification)=CURDATE()");
    const inactiveRows   = await db.query("SELECT COUNT(*) as v FROM users WHERE actif=0");

    let attendanceToday = 0;
    try {
      const attRows = await db.query("SELECT COUNT(*) as v FROM attendance WHERE DATE(check_in)=CURDATE()");
      attendanceToday = attRows[0].v;
    } catch (_) {}

    res.json({
      success: true,
      data: {
        totalUsers:      totalUsersRows[0].v,
        activeEmployees: activeEmpRows[0].v,
        activeManagers:  activeMgrRows[0].v,
        totalAdmins:     totalAdminRows[0].v,
        todayLogins:     todayLoginRows[0].v,
        inactiveUsers:   inactiveRows[0].v,
        attendanceToday
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── USERS ────────────────────────────────────────────────────────────────────
router.get('/users', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      'SELECT id, nom, prenom, email, telephone, role, actif, date_creation, date_modification FROM users ORDER BY date_creation DESC'
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/users', auth, isAdmin, async (req, res) => {
  try {
    const { nom, prenom, email, password, telephone, role } = req.body;
    if (!nom || !prenom || !email || !password || !role) {
      return res.status(400).json({ success: false, message: 'Champs obligatoires manquants.' });
    }
    const existing = await User.getByEmail(email);
    if (existing) return res.status(409).json({ success: false, message: 'Email déjà utilisé.' });
    const newId = await User.create({ nom, prenom, email, password, telephone, role });
    res.status(201).json({ success: true, data: { id: newId }, message: 'Utilisateur créé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.put('/users/:id', auth, isAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nom, prenom, email, telephone, role } = req.body;
    if (!nom || !prenom || !email || !role) {
      return res.status(400).json({ success: false, message: 'Champs obligatoires manquants.' });
    }
    // parseInt fixes: DB id (number) vs req.params.id (string) comparison in User.update
    const updated = await User.update(id, { nom, prenom, email, telephone, role });
    if (!updated) return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
    res.json({ success: true, message: 'Utilisateur mis à jour.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch('/users/:id/toggle', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await db.query('SELECT actif FROM users WHERE id=?', [id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
    const newStatus = rows[0].actif ? 0 : 1;
    await db.query('UPDATE users SET actif=?, date_modification=NOW() WHERE id=?', [newStatus, id]);
    res.json({ success: true, message: newStatus ? 'Compte activé.' : 'Compte désactivé.', actif: newStatus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.patch('/users/:id/reset-password', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'Mot de passe trop court (min 6 caractères).' });
    }
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash(newPassword, 10);
    await db.query('UPDATE users SET password=?, date_modification=NOW() WHERE id=?', [hash, id]);
    res.json({ success: true, message: 'Mot de passe réinitialisé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete('/users/:id', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (parseInt(id) === req.user.id) {
      return res.status(400).json({ success: false, message: 'Impossible de supprimer votre propre compte.' });
    }
    await db.query('UPDATE users SET actif=0 WHERE id=?', [id]);
    res.json({ success: true, message: 'Utilisateur supprimé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── ACTIVITY ─────────────────────────────────────────────────────────────────
router.get('/activity', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      `SELECT id, nom, prenom, email, role, actif, date_modification as lastActivity
       FROM users ORDER BY date_modification DESC LIMIT 20`
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── ANALYTICS ────────────────────────────────────────────────────────────────
router.get('/role-stats', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      'SELECT role, COUNT(*) as count, SUM(actif) as active FROM users GROUP BY role'
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/growth', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      `SELECT DATE(date_creation) as day, COUNT(*) as count
       FROM users WHERE date_creation >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
       GROUP BY DATE(date_creation) ORDER BY day ASC`
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── PERMISSIONS (persistées en DB) ───────────────────────────────────────────
router.get('/permissions', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query('SELECT role, permission, allowed FROM role_permissions');
    // Retourne un objet { admin: {perm: bool}, manager: {...}, employee: {...} }
    const result = { admin: {}, manager: {}, employee: {} };
    for (const row of rows) {
      if (result[row.role]) result[row.role][row.permission] = !!row.allowed;
    }
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/permissions', auth, isAdmin, async (req, res) => {
  try {
    const { permissions } = req.body; // { admin: {perm: bool}, manager: {...}, ... }
    if (!permissions) return res.status(400).json({ success: false, message: 'Données manquantes.' });
    for (const [role, perms] of Object.entries(permissions)) {
      for (const [permission, allowed] of Object.entries(perms)) {
        await db.query(
          `INSERT INTO role_permissions (role, permission, allowed)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE allowed=VALUES(allowed)`,
          [role, permission, allowed ? 1 : 0]
        );
      }
    }
    res.json({ success: true, message: 'Permissions sauvegardées.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── NOTIFICATIONS (générées depuis les événements DB) ────────────────────────
router.get('/notifications', auth, isAdmin, async (req, res) => {
  try {
    const notifs = [];

    // Nouveaux utilisateurs (48h)
    const newUsers = await db.query(
      `SELECT id, nom, prenom, role, date_creation as time
       FROM users WHERE date_creation >= DATE_SUB(NOW(), INTERVAL 48 HOUR)
       ORDER BY date_creation DESC LIMIT 5`
    );
    for (const u of newUsers) {
      notifs.push({
        id: `new_user_${u.id}`,
        type: 'new_user',
        icon: 'bi-person-plus-fill',
        color: 'success',
        text: `Nouvel utilisateur inscrit : ${u.prenom} ${u.nom}`,
        detail: u.role === 'admin' ? 'Administrateur' : u.role === 'manager' ? 'Manager' : 'Employé',
        time: u.time
      });
    }

    // Comptes désactivés (24h)
    const deactivated = await db.query(
      `SELECT id, nom, prenom, date_modification as time
       FROM users WHERE actif=0 AND date_modification >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
       ORDER BY date_modification DESC LIMIT 3`
    );
    for (const u of deactivated) {
      notifs.push({
        id: `deactivated_${u.id}`,
        type: 'deactivated',
        icon: 'bi-person-x-fill',
        color: 'warning',
        text: `Compte désactivé : ${u.prenom} ${u.nom}`,
        detail: 'Accès révoqué',
        time: u.time
      });
    }

    // Présences aujourd'hui
    let attCount = 0;
    try {
      const attRows = await db.query(
        "SELECT COUNT(*) as v FROM attendance WHERE DATE(check_in)=CURDATE()"
      );
      attCount = attRows[0].v;
    } catch (_) {}
    if (attCount > 0) {
      notifs.push({
        id: `attendance_${new Date().toISOString().slice(0,10)}`,
        type: 'attendance',
        icon: 'bi-calendar-check-fill',
        color: 'info',
        text: `${attCount} présence${attCount > 1 ? 's' : ''} enregistrée${attCount > 1 ? 's' : ''} aujourd'hui`,
        detail: 'Pointage du jour',
        time: new Date()
      });
    }

    // Modifications récentes (autres que création — mises à jour de profil)
    const modified = await db.query(
      `SELECT id, nom, prenom, date_modification as time
       FROM users
       WHERE date_modification >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
         AND date_modification != date_creation
         AND actif = 1
       ORDER BY date_modification DESC LIMIT 3`
    );
    for (const u of modified) {
      // Éviter les doublons avec les nouveaux utilisateurs
      if (!notifs.find(n => n.id === `new_user_${u.id}`)) {
        notifs.push({
          id: `modified_${u.id}_${new Date(u.time).getTime()}`,
          type: 'modified',
          icon: 'bi-pencil-square',
          color: 'info',
          text: `Profil modifié : ${u.prenom} ${u.nom}`,
          detail: 'Mise à jour du compte',
          time: u.time
        });
      }
    }

    // Trier par date décroissante
    notifs.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

    res.json({ success: true, data: notifs.slice(0, 12) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── SETTINGS (persistés en DB) ───────────────────────────────────────────────
router.get('/settings', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query('SELECT key_name, value FROM admin_settings');
    const data = {};
    for (const row of rows) {
      try { data[row.key_name] = JSON.parse(row.value); } catch { data[row.key_name] = row.value; }
    }
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/settings', auth, isAdmin, async (req, res) => {
  try {
    const settings = req.body;
    for (const [key, value] of Object.entries(settings)) {
      await db.query(
        `INSERT INTO admin_settings (key_name, value) VALUES (?, ?)
         ON DUPLICATE KEY UPDATE value=VALUES(value), updated_at=NOW()`,
        [key, JSON.stringify(value)]
      );
    }
    res.json({ success: true, message: 'Paramètres sauvegardés.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

# SIT ERP System

**Système ERP pour SIT** - Application web complète avec :
- **Frontend** : Angular 17+
- **Backend** : Node.js avec Express
- **Base de données** : MySQL (compatible HeidiSQL)

## Structure du projet

```
windsurf-project-2/
├── backend/                 # API Node.js + Express
│   ├── src/
│   │   ├── config/         # Configuration base de données
│   │   ├── controllers/    # Logique métier
│   │   ├── models/         # Modèles de données
│   │   ├── routes/         # Routes API
│   │   └── app.js          # Point d'entrée principal
│   ├── package.json
│   └── .env                # Variables d'environnement
├── frontend/               # Application Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
│   │   └── environments/
│   ├── package.json
│   └── angular.json
└── database/               # Scripts SQL
    └── init.sql
```

## Installation et démarrage

### Prérequis
- Node.js 18+
- Angular CLI
- MySQL Server

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

### Base de données
Importer le fichier `database/init.sql` dans HeidiSQL

## Configuration
Modifier les fichiers `.env` pour configurer la connexion à votre base de données MySQL.

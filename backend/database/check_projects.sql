-- ========================================
-- COMMANDES SQL POUR VÉRIFIER LES PROJETS
-- ========================================

-- 1. Voir tous les projets
SELECT * FROM projects ORDER BY created_at DESC;

-- 2. Voir les projets par manager
SELECT 
    p.*,
    CONCAT(u.prenom, ' ', u.nom) as manager_name,
    u.email as manager_email
FROM projects p
JOIN users u ON p.manager_id = u.id
ORDER BY p.created_at DESC;

-- 3. Voir les projets par statut
SELECT 
    status,
    COUNT(*) as nombre_projets,
    SUM(budget) as budget_total,
    AVG(progress) as progression_moyenne
FROM projects
GROUP BY status;

-- 4. Voir les projets par équipe
SELECT 
    team,
    COUNT(*) as nombre_projets,
    SUM(budget) as budget_total,
    AVG(progress) as progression_moyenne
FROM projects
GROUP BY team
ORDER BY nombre_projets DESC;

-- 5. Voir les projets récents (derniers 7 jours)
SELECT 
    p.*,
    CONCAT(u.prenom, ' ', u.nom) as manager_name
FROM projects p
JOIN users u ON p.manager_id = u.id
WHERE p.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY p.created_at DESC;

-- 6. Voir les projets en retard
SELECT 
    p.*,
    CONCAT(u.prenom, ' ', u.nom) as manager_name,
    DATEDIFF(p.deadline, CURDATE()) as jours_restants
FROM projects p
JOIN users u ON p.manager_id = u.id
WHERE p.deadline < CURDATE() AND p.status = 'active'
ORDER BY jours_restants ASC;

-- 7. Statistiques globales
SELECT 
    COUNT(*) as total_projets,
    SUM(budget) as budget_total,
    AVG(progress) as progression_moyenne,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as projets_actifs,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) as projets_termines
FROM projects;

-- 8. Rechercher un projet spécifique (remplacer 'Formation Angular' par votre recherche)
SELECT 
    p.*,
    CONCAT(u.prenom, ' ', u.nom) as manager_name
FROM projects p
JOIN users u ON p.manager_id = u.id
WHERE p.name LIKE '%Formation Angular%'
ORDER BY p.created_at DESC;

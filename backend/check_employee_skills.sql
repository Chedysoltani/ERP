-- Requêtes SQL pour vérifier les compétences d'un employé spécifique
-- Remplacer :employee_id par l'ID de l'employé souhaité (ex: 2, 3, 4, 5, etc.)

-- 1. Vue d'ensemble complète d'un employé avec toutes ses compétences
SELECT 
    u.id,
    u.prenom,
    u.nom,
    u.email,
    u.role,
    -- Compétences
    (SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', s.id,
            'name', s.name,
            'category', s.category,
            'level', s.level,
            'yearsExperience', s.years_experience,
            'validated', s.validated,
            'lastUsed', s.last_used,
            'createdAt', s.created_at
        )
    ) FROM employee_skills s WHERE s.employee_id = u.id) as skills,
    -- Technologies
    (SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', t.id,
            'name', t.name,
            'category', t.category,
            'proficiency', t.proficiency,
            'projects', t.projects,
            'createdAt', t.created_at
        )
    ) FROM employee_technologies t WHERE t.employee_id = u.id) as technologies,
    -- Spécialités
    (SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', sp.id,
            'name', sp.name,
            'domain', sp.domain,
            'description', sp.description,
            'createdAt', sp.created_at
        )
    ) FROM employee_specialities sp WHERE sp.employee_id = u.id) as specialities
FROM users u
WHERE u.id = :employee_id AND u.role = 'employee';

-- 2. Liste détaillée des compétences d'un employé
SELECT 
    s.id,
    s.name as competence,
    s.category,
    s.level as niveau,
    s.years_experience as annees_experience,
    s.validated as validee,
    s.last_used as derniere_utilisation,
    s.created_at as date_creation,
    u.prenom,
    u.nom
FROM employee_skills s
JOIN users u ON s.employee_id = u.id
WHERE s.employee_id = :employee_id
ORDER BY s.category, s.level DESC;

-- 3. Liste des technologies maîtrisées
SELECT 
    t.id,
    t.name as technologie,
    t.category,
    t.proficiency as maitrise,
    t.projects as projets_realises,
    t.created_at as date_ajout,
    u.prenom,
    u.nom
FROM employee_technologies t
JOIN users u ON t.employee_id = u.id
WHERE t.employee_id = :employee_id
ORDER BY t.proficiency, t.projects DESC;

-- 4. Spécialités de l'employé
SELECT 
    sp.id,
    sp.name as specialite,
    sp.domain,
    sp.description,
    sp.created_at as date_ajout,
    u.prenom,
    u.nom
FROM employee_specialities sp
JOIN users u ON sp.employee_id = u.id
WHERE sp.employee_id = :employee_id;

-- 5. Statistiques des compétences de l'employé
SELECT 
    u.id,
    u.prenom,
    u.nom,
    COUNT(DISTINCT s.id) as nb_competences,
    COUNT(DISTINCT t.id) as nb_technologies,
    COUNT(DISTINCT sp.id) as nb_specialites,
    AVG(s.level) as niveau_moyen_competences,
    SUM(CASE WHEN s.validated = 1 THEN 1 ELSE 0 END) as competences_valides,
    SUM(t.projects) as total_projets
FROM users u
LEFT JOIN employee_skills s ON u.id = s.employee_id
LEFT JOIN employee_technologies t ON u.id = t.employee_id
LEFT JOIN employee_specialities sp ON u.id = sp.employee_id
WHERE u.id = :employee_id AND u.role = 'employee'
GROUP BY u.id, u.prenom, u.nom;

-- 6. Tous les employés avec leur nombre de compétences (pour comparer)
SELECT 
    u.id,
    u.prenom,
    u.nom,
    u.email,
    COUNT(DISTINCT s.id) as nb_competences,
    COUNT(DISTINCT t.id) as nb_technologies,
    COUNT(DISTINCT sp.id) as nb_specialites,
    AVG(s.level) as niveau_moyen
FROM users u
LEFT JOIN employee_skills s ON u.id = s.employee_id
LEFT JOIN employee_technologies t ON u.id = t.employee_id
LEFT JOIN employee_specialities sp ON u.id = sp.employee_id
WHERE u.role = 'employee'
GROUP BY u.id, u.prenom, u.nom, u.email
ORDER BY nb_competences DESC, niveau_moyen DESC;

-- 7. Recherche d'employés par compétence spécifique
-- Remplacer ':skill_name' par le nom de la compétence recherchée
SELECT 
    u.id,
    u.prenom,
    u.nom,
    u.email,
    s.name as competence,
    s.level as niveau,
    s.years_experience as annees_experience,
    s.validated as validee
FROM users u
JOIN employee_skills s ON u.id = s.employee_id
WHERE s.name = ':skill_name' AND u.role = 'employee'
ORDER BY s.level DESC, s.years_experience DESC;

-- 8. Employés avec compétences de haut niveau (niveau 4-5)
SELECT 
    u.id,
    u.prenom,
    u.nom,
    u.email,
    s.name as competence,
    s.level as niveau,
    s.category,
    s.years_experience
FROM users u
JOIN employee_skills s ON u.id = s.employee_id
WHERE s.level >= 4 AND u.role = 'employee'
ORDER BY s.level DESC, s.years_experience DESC;

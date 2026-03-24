-- Mettre à jour les dates des réunions existantes pour qu'elles correspondent à l'année actuelle (2026)
UPDATE meetings SET date_time = '2026-03-25 10:00:00' WHERE title = 'Réunion d''équipe' AND date_time LIKE '2024%';
UPDATE meetings SET date_time = '2026-03-26 14:00:00' WHERE title = 'Réunion avec le client' AND date_time LIKE '2024%';
UPDATE meetings SET date_time = '2026-03-27 16:00:00' WHERE title = 'Point technique' AND date_time LIKE '2024%';
UPDATE meetings SET date_time = '2026-03-28 11:00:00' WHERE title = 'Revue de projet' AND date_time LIKE '2024%';

-- Vérifier les mises à jour
SELECT id, title, date_time, YEAR(date_time) as year, MONTH(date_time) as month FROM meetings ORDER BY date_time;

-- Solution pour corriger le problème d'authentification MariaDB
-- Exécuter cette requête dans HeidiSQL ou MariaDB

-- Option 1: Modifier l'utilisateur root pour utiliser l'authentification native (MariaDB)
ALTER USER 'root'@'localhost' IDENTIFIED VIA mysql_native_password;
FLUSH PRIVILEGES;

-- Option 2: Créer un nouvel utilisateur dédié (décommenter si vous préférez)
-- CREATE USER 'sit_user'@'localhost' IDENTIFIED VIA mysql_native_password USING PASSWORD 'sit_password';
-- GRANT ALL PRIVILEGES ON sit_erp_db.* TO 'sit_user'@'localhost';
-- FLUSH PRIVILEGES;

-- Option 3: Si les options ci-dessus ne fonctionnent pas, essayer cette approche
-- SET PASSWORD FOR 'root'@'localhost' = PASSWORD('');
-- FLUSH PRIVILEGES;

-- Vérifier la configuration
SELECT user, host, plugin, authentication_string FROM mysql.user WHERE user IN ('root', 'sit_user');

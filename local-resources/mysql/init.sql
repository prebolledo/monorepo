CREATE DATABASE IF NOT EXISTS monorepo;

use monorepo;

FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS `users` (
    id varchar(255) NOT NULL PRIMARY KEY,
    email varchar(255) NOT NULL,
    name varchar(50)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
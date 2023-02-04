CREATE TABLE IF NOT EXISTS `user`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL UNIQUE,
    `password` VARCHAR(256) NOT NULL,
    `mail` VARCHAR(64) NOT NULL UNIQUE,
    `github_url` VARCHAR(128),

    PRIMARY KEY(`id`)
);
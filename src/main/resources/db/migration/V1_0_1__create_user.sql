CREATE TABLE IF NOT EXISTS `user`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL UNIQUE,
    `password` VARCHAR(32) NOT NULL,
    `mail` VARCHAR(48) NOT NULL UNIQUE,
    `github_name` VARCHAR(16) UNIQUE,
    `country` VARCHAR(3),
    -- account_type = `ants` OR `google`,`slack`
    `account_type` INT NOT NULL,

    PRIMARY KEY(`id`)
);
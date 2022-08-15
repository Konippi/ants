CREATE TABLE IF NOT EXISTS `user_profile`
(
    `user_id` INT,
    `mail` VARCHAR(48) NOT NULL UNIQUE,
    `github_name` VARCHAR(16) UNIQUE,
    `country` VARCHAR(3) NOT NULL,

    PRIMARY KEY(`user_id`)
);
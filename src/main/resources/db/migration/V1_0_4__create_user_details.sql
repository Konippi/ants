CREATE TABLE IF NOT EXISTS `user_details`
(
    `user_id` INT,
    `mail` VARCHAR(48) NOT NULL UNIQUE,
    `github_name` VARCHAR(16) NOT NULL UNIQUE,
    `country` VARCHAR(3) NOT NULL
);
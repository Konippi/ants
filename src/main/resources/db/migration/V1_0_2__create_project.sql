CREATE TABLE IF NOT EXISTS `project`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL UNIQUE,
    `description` VARCHAR(256),

    PRIMARY KEY(`id`)
);
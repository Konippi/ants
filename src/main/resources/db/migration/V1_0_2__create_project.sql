CREATE TABLE IF NOT EXISTS `project`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL UNIQUE,
    `star` INT NOT NULL DEFAULT 0,

    PRIMARY KEY(`id`)
);
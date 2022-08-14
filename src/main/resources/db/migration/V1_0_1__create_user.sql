CREATE TABLE IF NOT EXISTS `user`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(16) NOT NULL UNIQUE,
    `password` VARCHAR(32),
    -- account_type = {`ants`, `google`, `slack`}
    `account_type` VARCHAR(8) NOT NULL,

    PRIMARY KEY(`id`)
);
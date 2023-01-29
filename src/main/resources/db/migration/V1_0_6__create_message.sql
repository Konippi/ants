CREATE TABLE IF NOT EXISTS `message`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `project_id` INT NOT NULL,
    `contents` VARCHAR(256) NOT NULL,

    PRIMARY KEY(`id`),
    FOREIGN KEY fk_message_user_id(`user_id`) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_message_project_id(`project_id`) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE
);
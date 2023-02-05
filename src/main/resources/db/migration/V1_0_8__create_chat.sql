CREATE TABLE IF NOT EXISTS `chat`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `project_id` INT NOT NULL,
    `message` VARCHAR(256) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(`id`),
    FOREIGN KEY fk_chat_user_id(`user_id`) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_chat_project_id(`project_id`) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE
);
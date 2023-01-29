CREATE TABLE IF NOT EXISTS `task`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `project_id` INT NOT NULL,
    `title` VARCHAR(32) NOT NULL,
    `description` VARCHAR(256),
    `status_id` INT NOT NULL,

    PRIMARY KEY(`id`),
    FOREIGN KEY fk_task_user_id(`user_id`) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_task_project_id(`project_id`) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_task_status_id(`status_id`) REFERENCES task_status(id) ON DELETE CASCADE ON UPDATE CASCADE
);
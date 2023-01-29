CREATE TABLE IF NOT EXISTS `r_user_project`
(
    `user_id` INT NOT NULL,
    `project_id` INT NOT NULL,

    PRIMARY KEY(`user_id`, `project_id`),
    FOREIGN KEY fk_r_user_project_user_id(`user_id`) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY fk_r_user_project_project_id(`project_id`) REFERENCES project(id) ON DELETE CASCADE ON UPDATE CASCADE
 );
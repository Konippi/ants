CREATE TABLE IF NOT EXISTS `r_user_project`
(
    `user_id` INT,
    `project_id` INT,

    PRIMARY KEY(`user_id`, `project_id`)
);
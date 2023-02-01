package com.example.ants.model.entity;

import lombok.Data;

import com.example.ants.db.entity.Project;
import com.example.ants.db.entity.User;

import java.util.List;

@Data
public class ProjectWithUsersEntity {
    private Project project;
    private List<User> users;
}
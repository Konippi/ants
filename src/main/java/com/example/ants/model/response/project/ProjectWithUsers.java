package com.example.ants.model.response.project;

import com.example.ants.db.entity.Project;
import com.example.ants.db.entity.User;
import com.example.ants.model.response.user.UserModel;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ProjectWithUsers {
    private Project project;
    private List<UserModel> users;
}
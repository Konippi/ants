package com.example.ants.model.response.project;

import com.example.ants.db.entity.Project;
import com.example.ants.model.entity.ProjectWithUsersEntity;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class AllProjectResponse {
    private List<ProjectWithUsers> projects;
}

package com.example.ants.model.response.project;

import com.example.ants.db.entity.Project;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class AllProjectResponse {
    private List<Project> projects;
}

package com.example.ants.model.response.project;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class AllProjectResponse {
    private List<ProjectWithUsers> projects;
}

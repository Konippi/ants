package com.example.ants.service;

import com.example.ants.model.response.project.AllProjectResponse;
import com.example.ants.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public AllProjectResponse getAllProjectByUserId(int userId) {
        return AllProjectResponse.builder().projects(projectRepository.selectAllProjectByUserId(userId)).build();
    }

    public void createProject() {
    }

    public void editProject() {
    }

    public void deleteProject(int projectId) {
    }
}

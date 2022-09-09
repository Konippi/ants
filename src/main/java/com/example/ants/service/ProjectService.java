package com.example.ants.service;

import com.example.ants.db.entity.Project;
import com.example.ants.model.response.project.AllProjectResponse;
import com.example.ants.repository.ProjectRepository;
import com.example.ants.repository.RUserProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final RUserProjectRepository rUserProjectRepository;

    public AllProjectResponse getAllProjectByUserId(int userId) {
        return AllProjectResponse.builder().projects(projectRepository.selectAllProjectByUserId(userId)).build();
    }

    public Project createProject(String name, int star, List<Integer> userIdList) {
        final var newProject = new Project();
        newProject.setName(name);
        newProject.setStar(star);
        projectRepository.createProject(newProject);
        rUserProjectRepository.createRUserProject(newProject.getId(), userIdList);
        return newProject;
    }

    public Project editProject(int projectId, String name, int star, List<Integer> userIdList) {
        final var updatingProject = new Project();
        updatingProject.setId(projectId);
        updatingProject.setName(name);
        updatingProject.setStar(star);
        projectRepository.editProject(updatingProject);
        rUserProjectRepository.deleteRUserProjectByProjectId((projectId));
        rUserProjectRepository.createRUserProject(projectId, userIdList);
        return updatingProject;
    }

    public void deleteProject(int projectId) {
        projectRepository.deleteProject(projectId);
        rUserProjectRepository.deleteRUserProjectByProjectId(projectId);
    }
}

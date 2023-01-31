package com.example.ants.service;

import com.example.ants.db.entity.Project;
import com.example.ants.model.response.project.AllProjectResponse;
import com.example.ants.model.response.project.ProjectWithUsers;
import com.example.ants.model.response.user.UserModel;
import com.example.ants.repository.ProjectRepository;
import com.example.ants.repository.RUserProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final RUserProjectRepository rUserProjectRepository;

    public AllProjectResponse getAllProjectWithUsersByUserId(int userId) {
        final var projectWithUsersList = projectRepository.selectAllProjectWithUsersByUserId(userId);
        return AllProjectResponse.builder()
                .projects(projectWithUsersList.stream()
                        .map(e -> ProjectWithUsers.builder()
                                .project(e.getProject())
                                .users(e.getUsers().stream()
                                        .map(u -> UserModel.builder()
                                                .userId(u.getId())
                                                .name(u.getName())
                                                .build())
                                        .collect(Collectors.toList()))
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }

    public Project createProject(String name, String description, List<Integer> userIdList) {
        final var newProject = new Project();
        newProject.setName(name);
        newProject.setDescription(description);
        projectRepository.createProject(newProject);
        rUserProjectRepository.createRUserProject(newProject.getId(), userIdList);
        return newProject;
    }

    public Project editProject(int projectId, String name, String description, List<Integer> userIdList) {
        final var updatingProject = new Project();
        updatingProject.setId(projectId);
        updatingProject.setName(name);
        updatingProject.setDescription(description);
        projectRepository.editProject(updatingProject);
        rUserProjectRepository.deleteRUserProjectByProjectId((projectId));
        rUserProjectRepository.createRUserProject(projectId, userIdList);
        return updatingProject;
    }

    public void deleteProject(int projectId) {
        projectRepository.deleteProject(projectId);
    }
}

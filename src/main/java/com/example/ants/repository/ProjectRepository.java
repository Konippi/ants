package com.example.ants.repository;

import com.example.ants.db.entity.Project;
import com.example.ants.db.entity.User;
import com.example.ants.db.mapper.ProjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class ProjectRepository {
    private final ProjectMapper projectMapper;

    public List<Project> selectAllProjectByUserId(int userId) {
        return projectMapper.selectAllProjectByUserId(userId);
    }

    public int createProject(final Project record) {
        return projectMapper.insert(record);
    }

    public int editProject(final Project record) {
        return projectMapper.updateByPrimaryKey(record);
    }

    public int deleteProject(final int projectId) {
        return projectMapper.deleteByPrimaryKey(projectId);
    }
}

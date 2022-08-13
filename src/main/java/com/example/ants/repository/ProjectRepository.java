package com.example.ants.repository;

import com.example.ants.db.entity.Project;
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
}

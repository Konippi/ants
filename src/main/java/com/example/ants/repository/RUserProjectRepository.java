package com.example.ants.repository;

import com.example.ants.db.entity.RUserProjectExample;
import com.example.ants.db.mapper.RUserProjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class RUserProjectRepository {
    private final RUserProjectMapper rUserProjectMapper;

    public int createRUserProject(final int projectId, final List<Integer> userIdList) {
        return rUserProjectMapper.insertRUserProject(projectId, userIdList);
    }

    public int deleteRUserProjectByProjectId(final int projectId) {
        final var example = new RUserProjectExample();
        example.createCriteria().andProjectIdEqualTo(projectId);
        return rUserProjectMapper.deleteByExample(example);
    }
}

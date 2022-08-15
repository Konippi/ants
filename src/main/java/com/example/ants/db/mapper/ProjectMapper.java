package com.example.ants.db.mapper;

import com.example.ants.db.entity.Project;
import com.example.ants.db.mapper.base.ProjectBaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProjectMapper extends ProjectBaseMapper {
    List<Project> selectAllProjectByUserId(@Param(value = "userId") int userId);
}

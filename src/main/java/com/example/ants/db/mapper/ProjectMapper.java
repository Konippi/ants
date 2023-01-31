package com.example.ants.db.mapper;

import com.example.ants.db.mapper.base.ProjectBaseMapper;
import com.example.ants.model.entity.ProjectWithUsersEntity;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProjectMapper extends ProjectBaseMapper {
    List<ProjectWithUsersEntity> selectAllProjectWithUsersByUserId(@Param(value = "userId") int userId);
}

package com.example.ants.db.mapper;

import com.example.ants.db.mapper.base.RUserProjectBaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RUserProjectMapper extends RUserProjectBaseMapper {
    int insertRUserProject(@Param(value = "projectId") int projectId, @Param(value = "userIdList") List<Integer> userIdList);
}

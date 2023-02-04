package com.example.ants.db.mapper;

import com.example.ants.db.mapper.base.UserBaseMapper;
import com.example.ants.model.entity.ProjectWithUsersEntity;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper extends UserBaseMapper{

    int updateUserExceptPassword(@Param(value = "userId") int userId, @Param(value = "name") String name,
                                 @Param(value = "mail") String mail, @Param(value = "githubUrl") String githubUrl);
}

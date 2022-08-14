package com.example.ants.repository;

import com.example.ants.db.entity.User;
import com.example.ants.db.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final UserMapper userMapper;

    public int createUser(User record){
        return userMapper.insert(record);
    }
}

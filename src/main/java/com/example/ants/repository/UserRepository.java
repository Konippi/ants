package com.example.ants.repository;

import com.example.ants.db.entity.User;
import com.example.ants.db.entity.UserExample;
import com.example.ants.db.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepository {

    private final UserMapper userMapper;

    public List<User> selectAllUsers() {
        return userMapper.selectByExample(null);
    }

    public Optional<User> selectUserInfoByUserId(final int userId) {
        final var example = new UserExample();
        example.createCriteria().andIdEqualTo(userId);
        final var results = userMapper.selectByExample(example);
        return results.stream().findFirst();
    }

    public int createUser(final User record) {
        return userMapper.insert(record);
    }

    public int editUser(final User record) {
        return userMapper.updateByPrimaryKey(record);
    }

    public int deleteUser(final int userId) {
        return userMapper.deleteByPrimaryKey(userId);
    }
}

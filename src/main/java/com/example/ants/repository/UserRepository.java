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

    public Optional<User> selectUserInfoByUserName(final String name) {
        final var example = new UserExample();
        example.createCriteria().andNameEqualTo(name);
        final var results = userMapper.selectByExample(example);
        return results.stream().findFirst();
    }

    public Optional<User> selectUserInfoByMail(final String mail) {
        final var example = new UserExample();
        example.createCriteria().andMailEqualTo(mail);
        final var results = userMapper.selectByExample(example);
        return results.stream().findFirst();
    }

    public Optional<User> selectUserInfoByUserNameNotMe(final int userId, final String name) {
        final var example = new UserExample();
        example.createCriteria().andNameEqualTo(name).andIdNotEqualTo(userId);
        final var results = userMapper.selectByExample(example);
        return results.stream().findFirst();
    }

    public Optional<User> selectUserInfoByMailNotMe(final int userId, final String mail) {
        final var example = new UserExample();
        example.createCriteria().andMailEqualTo(mail).andIdNotEqualTo(userId);
        final var results = userMapper.selectByExample(example);
        return results.stream().findFirst();
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

    public int editUserExceptPassword(final int userId, final String name, final String mail, final String githubUrl) {
        return userMapper.updateUserExceptPassword(userId, name, mail, githubUrl);
    }

    public int deleteUser(final int userId) {
        return userMapper.deleteByPrimaryKey(userId);
    }
}

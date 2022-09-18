package com.example.ants.service;

import com.example.ants.db.entity.User;
import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.response.user.UserInfoModel;
import com.example.ants.model.response.user.UserModel;
import com.example.ants.model.response.user.UserResponse;
import com.example.ants.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserResponse getAllUsersList() {
        final List<User> allUsersList =  userRepository.selectAllUsers();
        return UserResponse.builder()
            .users(allUsersList.stream().map(e -> UserModel.builder().userId(e.getId()).name(e.getName()).build()).collect(Collectors.toList()))
            .build();
    }

    public UserInfoModel getUserInfoByUserId(final int userId) {
        final var entity = userRepository.selectUserInfoByUserId(userId).orElseThrow(
            () -> new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage()));
        return UserInfoModel.builder().mail(entity.getMail()).githubName(entity.getGithubName()).country(entity.getCountry()).build();
    }

    public User createUser(final String name, final String password, final String mail, final String githubName, final String country, final int accountType) {
        final var newUser = new User();

        newUser.setName(name);
        newUser.setPassword(password);
        newUser.setMail(mail);
        newUser.setGithubName(githubName);
        newUser.setCountry(country);
        newUser.setAccountType(accountType);

        userRepository.createUser(newUser);
        return newUser;
    }

    public User editUser(final int userId, final String name, final String password, final String mail, final String githubName, final String country, final int accountType) {
        final var updatingUser = new User();

        updatingUser.setId(userId);
        updatingUser.setName(name);
        updatingUser.setPassword(password);
        updatingUser.setMail(mail);
        updatingUser.setGithubName(githubName);
        updatingUser.setCountry(country);
        updatingUser.setAccountType(accountType);

        userRepository.editUser(updatingUser);
        return updatingUser;
    }

    public void deleteUser(final int userId) {
        userRepository.deleteUser(userId);
    }
}

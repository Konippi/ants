package com.example.ants.service;

import com.example.ants.db.entity.User;
import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.response.user.UserInfoModel;
import com.example.ants.model.response.user.UserModel;
import com.example.ants.model.response.user.UsersResponse;
import com.example.ants.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UsersResponse getAllUsersList() {
        final List<User> allUsersList =  userRepository.selectAllUsers();
        return UsersResponse.builder()
            .users(allUsersList.stream().map(e -> UserModel.builder().userId(e.getId()).name(e.getName()).build()).collect(Collectors.toList()))
            .build();
    }

    public UserInfoModel getUserInfoByUserId(final int userId) {
        final var entity = userRepository.selectUserInfoByUserId(userId).orElseThrow(
            () -> new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage()));
        return UserInfoModel.builder().name(entity.getName()).mail(entity.getMail()).githubUrl(entity.getGithubUrl()).build();
    }

    public void createUser(final String name, final String password, final String mail, final String githubUrl) {
        final var newUser = new User();

        newUser.setName(name);
        newUser.setPassword(password);
        newUser.setMail(mail);
        newUser.setGithubUrl(githubUrl);

        userRepository.createUser(newUser);
    }

    public void editUser(final int userId, final String name, final String password, final String mail, final String githubUrl) {
        final var updatingUser = new User();

        updatingUser.setId(userId);
        updatingUser.setName(name);
        updatingUser.setPassword(password);
        updatingUser.setMail(mail);
        updatingUser.setGithubUrl(githubUrl);

        userRepository.editUser(updatingUser);
    }

    public void deleteUser(final int userId) {
        userRepository.deleteUser(userId);
    }
}

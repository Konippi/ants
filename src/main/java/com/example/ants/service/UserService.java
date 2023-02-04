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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UsersResponse getAllUsersList() {
        final List<User> allUsersList =  userRepository.selectAllUsers();
        return UsersResponse.builder()
            .users(allUsersList.stream().map(e -> UserModel.builder().userId(e.getId()).name(e.getName()).build()).collect(Collectors.toList()))
            .build();
    }

    public UserInfoModel getUserInfoByUserId(final int userId) {
        final var entity = userRepository.selectUserInfoByUserId(userId).orElseThrow(
            () -> new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage()));
        return UserInfoModel.builder().id(entity.getId()).name(entity.getName()).mail(entity.getMail()).githubUrl(entity.getGithubUrl()).build();
    }

    public void createUser(final String name, final String password, final String mail, final String githubUrl) throws ApiException {
        if(userRepository.selectUserInfoByUserName(name).isPresent()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, "UserName already taken");
        }
        if(userRepository.selectUserInfoByMail(mail).isPresent()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, "Email already taken");
        }

        final var newUser = new User();
        newUser.setName(name);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setMail(mail);
        newUser.setGithubUrl(githubUrl);

        userRepository.createUser(newUser);
    }

    public void editUser(final int userId, final String name, final String mail, final String githubUrl) {
        if(userRepository.selectUserInfoByUserNameNotMe(userId, name).isPresent()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, "UserName already taken");
        }
        if(userRepository.selectUserInfoByMailNotMe(userId, mail).isPresent()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, "Email already taken");
        }

        userRepository.editUserExceptPassword(userId, name, mail, githubUrl);
    }

    public void deleteUser(final int userId) {
        userRepository.deleteUser(userId);
    }
}

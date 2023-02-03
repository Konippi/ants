package com.example.ants.controller.api;

import com.example.ants.auth.model.AuthUser;
import com.example.ants.db.entity.User;
import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.user.UserRequestBody;
import com.example.ants.model.response.user.UserInfoModel;
import com.example.ants.model.response.user.UsersResponse;
import com.example.ants.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    @GetMapping()
    public ResponseEntity<UsersResponse> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsersList(), HttpStatus.OK);
    }

    @GetMapping("/me")
    public ResponseEntity<User> getMe(@AuthenticationPrincipal AuthUser authUser) {

        return new ResponseEntity<>(authUser.getAuthUser(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoModel> getUserInfoByUserId(@PathVariable("userId") final int userId) {
        return new ResponseEntity<>(userService.getUserInfoByUserId(userId), HttpStatus.OK);
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody @Validated UserRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final String name = requestBody.getName();
        final String password = requestBody.getPassword();
        final String mail = requestBody.getMail();
        final String githubUrl = requestBody.getGithubUrl();

        userService.createUser(name, password, mail, githubUrl);
    }


    // エンドポイントのみ定義 (処理はSpring Securityで行われる)
    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.OK)
    public void logout() throws ApiException {
    }

    // エンドポイントのみ定義 (処理はSpring Securityで行われる)
    @PostMapping("/login?name={name}&password={password}")
    @ResponseStatus(HttpStatus.OK)
    public void login(@PathVariable("name") final String name, @PathVariable("password") final String password) throws ApiException {
    }

    @PutMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editUser(@PathVariable("userId") final int userId, @RequestBody @Validated UserRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final String name = requestBody.getName();
        final String password = requestBody.getPassword();
        final String mail = requestBody.getMail();
        final String githubUrl = requestBody.getGithubUrl();

        userService.editUser(userId, name, password, mail, githubUrl);
    }

    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable("userId") final int userId) throws ApiException{
        userService.deleteUser(userId);
    }
}

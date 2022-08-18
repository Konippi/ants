package com.example.ants.controller.api;

import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.user.UserRequestBody;
import com.example.ants.model.response.user.UserModel;
import com.example.ants.model.response.user.UserResponse;
import com.example.ants.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Delete;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    @GetMapping
    public ResponseEntity<UserResponse> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsersList(), HttpStatus.OK);
    }

    @GetMapping("/userId")
    public ResponseEntity<UserModel> getUserById(@PathVariable("userId") final int userId) {
        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity createUser(@RequestBody @Validated UserRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final String name = requestBody.getName();
        final String password = requestBody.getPassword();
        final String mail = requestBody.getMail();
        final String githubName = requestBody.getGithubName();
        final String country = requestBody.getCountry();
        final int accountType = requestBody.getAccountType();

        userService.createUser(name, password, mail, githubName, country, accountType);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/{userId}")
    public ResponseEntity editUser(@PathVariable("userId") final int userId, @RequestBody @Validated UserRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final String name = requestBody.getName();
        final String password = requestBody.getPassword();
        final String mail = requestBody.getMail();
        final String githubName = requestBody.getGithubName();
        final String country = requestBody.getCountry();
        final int accountType = requestBody.getAccountType();

        userService.editUser(userId, name, password, mail, githubName, country, accountType);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @Delete("/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") final int userId) throws ApiException{
        userService.deleteUser(userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}

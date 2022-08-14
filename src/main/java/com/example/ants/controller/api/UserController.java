package com.example.ants.controller.api;

import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.user.CreateUserRequestBody;
import com.example.ants.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity createUser(@RequestBody @Validated CreateUserRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final String name = requestBody.getName();
        final String password = requestBody.getPassword();
        final String accountType = requestBody.getAccountType();

        userService.createUser(name, password, accountType);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}

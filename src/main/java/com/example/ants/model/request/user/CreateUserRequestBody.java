package com.example.ants.model.request.user;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class CreateUserRequestBody {
    @NotNull
    @Size(max = 32)
    private String name;

    @NotNull
    @Size(max = 32)
    private String password;

    @NotNull
    @Size(max = 48)
    private String mail;

    @Size(max = 16)
    private String githubName;

    @NotNull
    @Size(max = 3)
    private String country;
}

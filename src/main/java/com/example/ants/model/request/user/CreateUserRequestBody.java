package com.example.ants.model.request.user;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class CreateUserRequestBody {
    @NotNull
    @Size(max = 16)
    private String name;

    @Size(max = 32)
    private String password;

    @NotNull
    @Size(max=8)
    private String accountType;
}

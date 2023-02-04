package com.example.ants.model.request.user;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class EditUserRequestBody {
    @NotNull
    @Size(max = 32)
    private String name;

    @NotNull
    @Size(max = 64)
    private String mail;

    @Size(max = 128)
    private String githubUrl;
}

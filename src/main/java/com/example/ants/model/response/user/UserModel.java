package com.example.ants.model.response.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Getter
@Builder
public class UserModel {
    private int userId;
    private String name;
}

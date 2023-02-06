package com.example.ants.model.response.user;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserModel {
    private int userId;
    private String name;
}

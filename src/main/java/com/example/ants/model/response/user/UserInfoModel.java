package com.example.ants.model.response.user;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserInfoModel {
    private Integer id;
    private String name;
    private String mail;
    private String githubUrl;
}

package com.example.ants.model.response.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserInfoModel {
    private String mail;
    private String githubName;
    private String country;
}

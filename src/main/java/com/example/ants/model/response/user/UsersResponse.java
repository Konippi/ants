package com.example.ants.model.response.user;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class UsersResponse {
    private List<UserModel> users;
}

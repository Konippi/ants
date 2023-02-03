package com.example.ants.auth.model;

import com.example.ants.db.entity.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.List;

// セッションで管理する認証ユーザーのモデル (Spring Security) をextends
public class AuthUser extends org.springframework.security.core.userdetails.User {
    private final User user;

    public AuthUser(User user) {
        super(user.getName(), user.getPassword(), List.of(new SimpleGrantedAuthority("USER")));
        this.user = user;
    }
    public User getAuthUser() {
        return user;
    }
}
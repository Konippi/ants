package com.example.ants.auth;

import com.example.ants.auth.model.AuthUser;
import com.example.ants.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// UserDetailsService (Spring Securityの認証を担う) の実装
@Service
@RequiredArgsConstructor
public class AntsUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    // loadUserByUsernameメソッドをOverrideしてDBを参照した独自認証機能を実装
    @Override
    public UserDetails loadUserByUsername(final String name) {
        // DBからユーザーを取得 -> セッションで管理するログインユーザー情報を生成
        return userRepository.selectUserInfoByUserName(name)
                .map(AuthUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found"));
    }
}
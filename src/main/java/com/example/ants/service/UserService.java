package com.example.ants.service;

import com.example.ants.db.entity.User;
import com.example.ants.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(final String name, final String password, final String accountType){
        final var newUser = new User();

        newUser.setName(name);
        newUser.setPassword(password);
        newUser.setAccountType(accountType);

        userRepository.createUser(newUser);
        return newUser;
    }
}

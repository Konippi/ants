package com.example.ants.repository;

import com.example.ants.db.entity.Chat;
import com.example.ants.db.mapper.ChatMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ChatRepository {
    private final ChatMapper chatMapper;

    public int createChat(final Chat record) {
        return chatMapper.insert(record);
    }
}

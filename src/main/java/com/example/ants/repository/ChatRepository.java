package com.example.ants.repository;

import com.example.ants.db.entity.Chat;
import com.example.ants.db.entity.ChatExample;
import com.example.ants.db.mapper.ChatMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ChatRepository {
    private final ChatMapper chatMapper;

    public List<Chat> selectChatsByProjectIdList(final List<Integer> projectIdList) {
        final var example = new ChatExample();
        example.createCriteria().andProjectIdIn(projectIdList);
        return chatMapper.selectByExample(example);
    }

    public int createChat(final Chat record) {
        return chatMapper.insert(record);
    }
}

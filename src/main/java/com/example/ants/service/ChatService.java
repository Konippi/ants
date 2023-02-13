package com.example.ants.service;

import com.example.ants.db.entity.Chat;
import com.example.ants.model.response.chat.ChatMessagesResponse;
import com.example.ants.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;

    public ChatMessagesResponse getChatMessagesByProjectIdList(final List<Integer> projectIdList) {
        final List<Chat> chatMessages = chatRepository.selectChatsByProjectIdList(projectIdList);
        return ChatMessagesResponse.builder().chatMessages(chatMessages).build();
    }


    public Chat createChat(final int projectId, final int userId, final String message) {
        final Chat chat = new Chat();
        chat.setProjectId(projectId);
        chat.setUserId(userId);
        chat.setMessage(message);
        chat.setCreatedAt(LocalDateTime.now());
        chatRepository.createChat(chat);

        return chat;
    }
}

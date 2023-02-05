package com.example.ants.service;

import com.example.ants.db.entity.Chat;
import com.example.ants.model.response.chat.ChatMessageResponse;
import com.example.ants.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChatService {
    private final ChatRepository chatRepository;

    public ChatMessageResponse createChat(final int projectId, final int userId, final String message) {
        final Chat chat = new Chat();
        chat.setProjectId(projectId);
        chat.setUserId(userId);
        chat.setMessage(message);
        chat.setCreatedAt(LocalDateTime.now());
        chatRepository.createChat(chat);

        return ChatMessageResponse.builder()
                .id(chat.getId()).projectId(chat.getProjectId()).userId(chat.getUserId())
                .message(chat.getMessage()).createdAt(chat.getCreatedAt())
                .build();
    }
}

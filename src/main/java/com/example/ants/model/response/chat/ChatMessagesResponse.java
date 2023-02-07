package com.example.ants.model.response.chat;

import com.example.ants.db.entity.Chat;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ChatMessagesResponse {
    private List<Chat> chatMessages;
}


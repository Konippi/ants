package com.example.ants.model.response.chat;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class WebSocketChatMessageResponse {
    private int id;
    private int projectId;
    private int userId;
    private String message;
    private LocalDateTime createdAt;
}


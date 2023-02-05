package com.example.ants.model.request.chat;

import lombok.Data;

@Data
public class ChatMessageRequestBody {
    private int projectId;
    private int userId;
    private String message;
}


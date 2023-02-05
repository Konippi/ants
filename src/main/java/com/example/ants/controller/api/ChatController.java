package com.example.ants.controller.api;

import com.example.ants.model.request.chat.ChatMessageRequestBody;
import com.example.ants.model.response.chat.ChatMessageResponse;
import com.example.ants.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    // WebSocket メッセージPOST
    @MessageMapping("/message/{projectId}")
    @SendTo("/chat/message/{projectId}")
    public ChatMessageResponse sendMessage(ChatMessageRequestBody requestBody) throws InterruptedException {
        Thread.sleep(300);
        final var projectId = requestBody.getProjectId();
        final var userId = requestBody.getUserId();
        final var message = requestBody.getMessage();

        return chatService.createChat(projectId, userId, message);
    }
}

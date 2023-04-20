package com.example.ants.controller.api;

import com.example.ants.db.entity.Chat;
import com.example.ants.model.request.chat.WebSocketChatMessageRequestBody;
import com.example.ants.model.response.chat.ChatMessagesResponse;
import com.example.ants.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/chat")
public class ChatController {
    private final ChatService chatService;

    @GetMapping("/{projectIdList}")
    public ResponseEntity<ChatMessagesResponse> getChatMessagesByProjectIdList(@PathVariable("projectIdList") final List<Integer> projectIdList) {
        return new ResponseEntity<>(chatService.getChatMessagesByProjectIdList(projectIdList), HttpStatus.OK);
    }

    // WebSocket メッセージPOST
    @MessageMapping("/message/{projectId}")
    @SendTo("/chat/message/{projectId}")
    public Chat sendMessage(WebSocketChatMessageRequestBody requestBody) {
        final var projectId = requestBody.getProjectId();
        final var userId = requestBody.getUserId();
        final var message = requestBody.getMessage();

        return chatService.createChat(projectId, userId, message);
    }
}

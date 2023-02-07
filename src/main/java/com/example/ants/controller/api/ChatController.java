package com.example.ants.controller.api;

import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.chat.ChatMessagesRequestBody;
import com.example.ants.model.request.chat.WebSocketChatMessageRequestBody;
import com.example.ants.model.response.chat.ChatMessagesResponse;
import com.example.ants.model.response.chat.WebSocketChatMessageResponse;
import com.example.ants.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/chat")
public class ChatController {
    private final ChatService chatService;

    @GetMapping()
    public ResponseEntity<ChatMessagesResponse> getChatMessagesByProjectIdList(@RequestBody @Validated ChatMessagesRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }
        return new ResponseEntity<>(chatService.getChatMessagesByProjectIdList(requestBody.getProjectIdList()), HttpStatus.OK);
    }

    // WebSocket メッセージPOST
    @MessageMapping("/message/{projectId}")
    @SendTo("/chat/message/{projectId}")
    public WebSocketChatMessageResponse sendMessage(WebSocketChatMessageRequestBody requestBody) throws InterruptedException {
        final var projectId = requestBody.getProjectId();
        final var userId = requestBody.getUserId();
        final var message = requestBody.getMessage();

        return chatService.createChat(projectId, userId, message);
    }
}

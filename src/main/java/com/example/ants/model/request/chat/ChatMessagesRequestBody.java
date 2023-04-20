package com.example.ants.model.request.chat;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ChatMessagesRequestBody {
    @NotNull
    private List<Integer> projectIdList;
}


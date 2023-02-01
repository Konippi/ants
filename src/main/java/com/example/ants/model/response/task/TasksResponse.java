package com.example.ants.model.response.task;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;

import java.util.List;

@Getter
@Builder
public class TasksResponse {
    private List<TaskModel> tasks;
}

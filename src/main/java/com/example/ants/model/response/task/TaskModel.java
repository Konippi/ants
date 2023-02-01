package com.example.ants.model.response.task;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Size;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Getter
@Builder
public class TaskModel {
    private int projectId;
    private int userId;
    private String title;
    private int statusId;
    private String description;
}

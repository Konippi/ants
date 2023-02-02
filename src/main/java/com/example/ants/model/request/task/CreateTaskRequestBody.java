package com.example.ants.model.request.task;

import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Optional;

@Data
public class CreateTaskRequestBody {
    @NotNull
    private int userId;

    @NotNull
    private int projectId;

    @NotNull
    @Size(max = 32)
    private String title;

    @Size(max = 256)
    private String description;

    @NotNull
    @Min(1)
    @Max(4)
    private int statusId;
}


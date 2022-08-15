package com.example.ants.model.request.project;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class ProjectRequestBody {
    @NotNull
    @Size(max = 16)
    private String name;

    private int star;

    private List<Integer> userIdList;
}

package com.example.ants.controller.api;

import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.task.CreateTaskRequestBody;
import com.example.ants.model.response.task.TasksResponse;
import com.example.ants.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/task")
public class TaskController {
    private final TaskService taskService;

    @GetMapping()
    public ResponseEntity<TasksResponse> getAllTasks() {
        return new ResponseEntity<>(taskService.getAllTasks(), HttpStatus.OK);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createTask(@RequestBody @Validated CreateTaskRequestBody requestBody, BindingResult result) {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final int userId = requestBody.getUserId();
        final int projectId = requestBody.getProjectId();
        final String title = requestBody.getTitle();
        final String description = requestBody.getDescription();
        final int statusId = requestBody.getStatusId();

        taskService.createTask(userId, projectId, title, description, statusId);
    }

    @PutMapping("/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editTask(@PathVariable("taskId") final int taskId,
                         @RequestBody @Validated CreateTaskRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }

        final int userId = requestBody.getUserId();
        final int projectId = requestBody.getProjectId();
        final String title = requestBody.getTitle();
        final String description = requestBody.getDescription();
        final int statusId = requestBody.getStatusId();

        taskService.editTask(taskId, userId, projectId, title, description, statusId);
    }

    @DeleteMapping("/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable("taskId") final int taskId) throws ApiException{
        taskService.deleteTask(taskId);
    }

}

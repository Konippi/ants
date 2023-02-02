package com.example.ants.service;

import com.example.ants.db.entity.Task;
import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.response.task.TaskModel;
import com.example.ants.model.response.task.TasksResponse;
import com.example.ants.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public TasksResponse getAllTasks() {
        final List<Task> allTasks = taskRepository.selectAllTasks();
        return TasksResponse.builder()
                .tasks(allTasks.stream().map(e ->
                        TaskModel.builder()
                                .userId(e.getUserId())
                                .projectId(e.getProjectId())
                                .title(e.getTitle())
                                .description(e.getDescription())
                                .statusId(e.getStatusId())
                                .build())
                        .collect(toList()))
                .build();
    }

    public void createTask(final int userId, final int projectId,
                          final String title, final String description, final int statusId) {
        final Task task = new Task();

        task.setUserId(userId);
        task.setProjectId(projectId);
        task.setTitle(title);
        task.setDescription(description);
        task.setStatusId(statusId);

        if (taskRepository.createTask(task) == 0) {
            throw new ApiException(ErrorCode.UNEXPECTED_ERROR, DetailErrorMessage.UNEXPECTED_ERROR.getMessage());
        }
    }

    public void editTask(final int taskId, final int userId, final int projectId, final String title, final String description, final int statusId) {
        final Task task = new Task();

        task.setId(taskId);
        task.setUserId(userId);
        task.setProjectId(projectId);
        task.setTitle(title);
        task.setDescription(description);
        task.setStatusId(statusId);

        if (taskRepository.editTask(task) == 0) {
            throw new ApiException(ErrorCode.UNEXPECTED_ERROR, DetailErrorMessage.UNEXPECTED_ERROR.getMessage());
        }
    }

    public void deleteTask(final int taskId) {
        if (taskRepository.deleteTask(taskId) == 0) {
            throw new ApiException(ErrorCode.UNEXPECTED_ERROR, DetailErrorMessage.UNEXPECTED_ERROR.getMessage());
        }
    }
}

package com.example.ants.repository;

import com.example.ants.db.entity.Task;
import com.example.ants.db.mapper.TaskMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TaskRepository {
    private final TaskMapper taskMapper;

    public List<Task> selectAllTasks() {
        return taskMapper.selectByExample(null);
    }

    public int createTask(final Task record) {
        return taskMapper.insert(record);
    }

    public int editTask(final Task record) {
        return taskMapper.updateByPrimaryKey(record);
    }

    public int deleteTask(final int taskId) {
        return taskMapper.deleteByPrimaryKey(taskId);
    }
}

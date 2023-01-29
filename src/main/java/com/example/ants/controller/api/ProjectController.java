package com.example.ants.controller.api;

import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.project.ProjectRequestBody;
import com.example.ants.model.response.project.AllProjectResponse;
import com.example.ants.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/project")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping("/{userId}")
    public ResponseEntity<AllProjectResponse> getAllProjectByUserId(@PathVariable("userId") int userId) {
        return new ResponseEntity<>(projectService.getAllProjectByUserId(userId), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity createProject(@RequestBody @Validated ProjectRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }
        projectService.createProject(requestBody.getName(), requestBody.getStar(), requestBody.getUserIdList());
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/{projectId}")
    public ResponseEntity editProject(@PathVariable("projectId") int projectId, @RequestBody @Validated ProjectRequestBody requestBody, BindingResult result) throws ApiException {
        if(result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }
        projectService.editProject(projectId, requestBody.getName(), requestBody.getStar(), requestBody.getUserIdList());
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity deleteProject(@PathVariable("projectId") int projectId) {
        projectService.deleteProject(projectId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}

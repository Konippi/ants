package com.example.ants.controller.api;

import com.example.ants.auth.model.AuthUser;
import com.example.ants.enums.error.DetailErrorMessage;
import com.example.ants.enums.error.ErrorCode;
import com.example.ants.exception.ApiException;
import com.example.ants.model.request.project.ProjectRequestBody;
import com.example.ants.model.response.project.AllProjectResponse;
import com.example.ants.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/project")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping()
    public ResponseEntity<AllProjectResponse> getAllProjectsInLoginUser(@AuthenticationPrincipal AuthUser authUser) {
        return new ResponseEntity<>(projectService.getAllProjectWithUsersByUserId(authUser.getAuthUser().getId()), HttpStatus.OK);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void createProject(@RequestBody @Validated ProjectRequestBody requestBody, BindingResult result) throws ApiException {
        if (result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }
        projectService.createProject(requestBody.getName(), requestBody.getDescription(), requestBody.getUserIdList());
    }

    @PutMapping("/{projectId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editProject(@PathVariable("projectId") int projectId, @RequestBody @Validated ProjectRequestBody requestBody, BindingResult result) throws ApiException {
        if(result.hasErrors()) {
            throw new ApiException(ErrorCode.INVALID_QUERY_PARAMETER, DetailErrorMessage.INVALID_QUERY_PARAMETER.getMessage());
        }
        projectService.editProject(projectId, requestBody.getName(), requestBody.getDescription(), requestBody.getUserIdList());
    }

    @DeleteMapping("/{projectId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProject(@PathVariable("projectId") int projectId) {
        projectService.deleteProject(projectId);
    }
}

package com.example.ants.controller;

import java.sql.Timestamp;

import com.example.ants.model.response.ErrorResponse;
import com.example.ants.utils.MessageConstants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.example.ants.exception.ApiException;

@ControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class ControllerExceptionHandler {

    /**
     * ApiExceptionをcatchしてErrorResponseを返すハンドラー
     *
     * @param exception
     *            ApiException
     * @return ApiExceptionの情報に基づいたErrorResponseを返す
     */
    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ErrorResponse> handleApiException(final ApiException exception) {
        log.error(exception.getMessage());
        final var errorResponse = new ErrorResponse();
        errorResponse.setType(MessageConstants.DEFAULT_RESPONSE_BODY_TYPE);
        errorResponse.setTimestamp(new Timestamp(System.currentTimeMillis()));
        errorResponse.setTitle(exception.getErrorCode().getMessageKey());
        errorResponse.setDetail(exception.getDetailErrorMessage());
        errorResponse.setErrorCode(exception.getErrorCode().getCode());
        return new ResponseEntity<>(errorResponse, exception.getErrorCode().getHttpStatus());
    }

}

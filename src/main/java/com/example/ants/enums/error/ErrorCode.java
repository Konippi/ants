package com.example.ants.enums.error;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    INVALID_QUERY_PARAMETER("E1001", HttpStatus.BAD_REQUEST, ErrorMessageKey.INVALID_QUERY_PARAMETER.getMessageKey()),
    NO_AUTHENTICATION("E2001", HttpStatus.BAD_REQUEST, ErrorMessageKey.NO_AUTHENTICATION.getMessageKey()),
    INSUFFICIENT_PRIVILEGES("E2002", HttpStatus.FORBIDDEN, ErrorMessageKey.INSUFFICIENT_PRIVILEGES.getMessageKey()),
    NOT_EXIST("E3001", HttpStatus.NOT_FOUND, ErrorMessageKey.NOT_EXIST.getMessageKey()),
    UNEXPECTED_ARGS("E3002", HttpStatus.INTERNAL_SERVER_ERROR, ErrorMessageKey.UNEXPECTED_ARGS.getMessageKey()),
    NOT_CONNECT_DB("E4001", HttpStatus.SERVICE_UNAVAILABLE, ErrorMessageKey.NOT_CONNECT_DB.getMessageKey()),
    API_NOT_FOUND("E4002", HttpStatus.INTERNAL_SERVER_ERROR, ErrorMessageKey.API_NOT_FOUND.getMessageKey()),
    API_NOT_RESPOND("E4003", HttpStatus.INTERNAL_SERVER_ERROR, ErrorMessageKey.API_NOT_RESPOND.getMessageKey()),
    UNEXPECTED_ERROR("E9999", HttpStatus.INTERNAL_SERVER_ERROR, ErrorMessageKey.UNEXPECTED_ERROR.getMessageKey());

    private final String code;
    private final HttpStatus httpStatus;
    private final String messageKey;

}

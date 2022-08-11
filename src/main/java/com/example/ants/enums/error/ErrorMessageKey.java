package com.example.ants.enums.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorMessageKey {

    INVALID_QUERY_PARAMETER("INVALID_QUERY_PARAMETER"),
    NO_AUTHENTICATION("NO_AUTHENTICATION"),
    NOT_EXIST("NOT_EXIST"),
    UNEXPECTED_ARGS("UNEXPECTED_ERROR"),
    NOT_CONNECT_DB("NOT_CONNECT_DB"),
    API_NOT_FOUND("API_NOT_FOUND"),
    API_NOT_RESPOND("API_NOT_RESPOND"),
    UNEXPECTED_ERROR("UNEXPECTED_ERROR"),
    INSUFFICIENT_PRIVILEGES("INSUFFICIENT PRIVILEGES");

    private final String messageKey;
}

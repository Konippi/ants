package com.example.ants.exception;

import lombok.Getter;
import com.example.ants.enums.error.ErrorCode;

@Getter
public class ApiException extends RuntimeException {
    final ErrorCode errorCode;
    final String detailErrorMessage;

    public ApiException(final ErrorCode errorCode, final String detailErrorMessage) {
        super(errorCode.getMessageKey());
        this.errorCode = errorCode;
        this.detailErrorMessage = detailErrorMessage;
    }

}

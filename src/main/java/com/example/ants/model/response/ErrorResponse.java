package com.example.ants.model.response;

import java.io.Serializable;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse implements Serializable {
    private String type;
    private Timestamp timestamp;
    private String title;
    private String detail;
    private String errorCode;
}

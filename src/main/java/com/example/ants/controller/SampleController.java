package com.example.ants.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class SampleController {
    @GetMapping("/")
    public ResponseEntity<String> index() {
        return new ResponseEntity<>("Sample", HttpStatus.OK);
    }
}

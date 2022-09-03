package com.example.ants.controller.api;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
@RequestMapping("/api/v1/sample")
@CrossOrigin("http://localhost:3000")
public class SampleController {
    @GetMapping()
    public ResponseEntity<String> index() {
        return new ResponseEntity<>("Sample", HttpStatus.OK);
    }
}

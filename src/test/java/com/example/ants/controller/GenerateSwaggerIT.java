package com.example.ants.controller;

import com.example.ants.annotation.IntegrationTest;
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.io.File;

@IntegrationTest
@SpringBootTest(properties = "spring.profiles.active=test")
@AutoConfigureMockMvc
public class GenerateSwaggerIT {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void generateSwagger() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/v2/api-docs").accept(MediaType.APPLICATION_JSON))
                .andDo((result) -> {
                    FileUtils.writeStringToFile(new File("swagger.json"), result.getResponse().getContentAsString());
                });

    }
}

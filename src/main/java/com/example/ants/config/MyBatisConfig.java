package com.example.ants.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@MapperScan("com.example.ants.db.mapper")
@Configuration
public class MyBatisConfig {
}
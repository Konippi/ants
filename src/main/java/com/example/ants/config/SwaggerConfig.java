package com.example.ants.config;

import com.google.common.base.Predicate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static com.google.common.base.Predicates.or;
import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
@Profile({ "local", "test", "dev" })
class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2) //
            .apiInfo(getApiInfo())
            .select() //
            .apis(RequestHandlerSelectors.any()) //
            .paths(paths()) //
            .build();
    }
    private ApiInfo getApiInfo() {
        return new ApiInfoBuilder()
                       .title("antsAPI")
                       .description("available methods list")
                       .version("1.0.0")
                       .build();
    }
    private Predicate<String> paths() {
        return or(regex("/api/v1/.*"));
    }

}
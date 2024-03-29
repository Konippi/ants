package com.example.ants.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
@Profile({ "local", "test", "dev" })
class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2) //
            .apiInfo(getApiInfo()) //
//          .securityContexts(Lists.newArrayList(getSecurityContext())) //
//          .securitySchemes(Lists.newArrayList(getApiKey())) //
            .select() //
            .apis(RequestHandlerSelectors.any()) //
            .paths(PathSelectors.regex("/api/v1/.*")) //
            .build();
    }
    private ApiInfo getApiInfo() {
        return new ApiInfoBuilder()
                       .title("antsAPI")
                       .description("available methods list")
                       .version("1.0.0")
                       .build();
    }
//    private SecurityContext getSecurityContext() {
//        return SecurityContext.builder().securityReferences(getDefaultAuth()).build();
//    }
//    private List<SecurityReference> getDefaultAuth() {
//        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
//        AuthorizationScope[] authorizationScopeList = new AuthorizationScope[1];
//        authorizationScopeList[0] = authorizationScope;
//        return Lists.newArrayList(new SecurityReference("JWT", authorizationScopeList));
//    }
//    private ApiKey getApiKey() {
//        return new ApiKey("JWT", "Authorization", "password");
//    }
}

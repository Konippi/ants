package com.example.ants.config;

import com.example.ants.auth.AntsAuthenticationFailureHandler;
import com.example.ants.auth.AntsAuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Value("${spring.profiles.active:}")
    private String profile;

    @Value("${ants.security.csrf}")
    private boolean isEnabledCsrf;

    private static final String[] ACCESSIBLE_PATH = {
            "/", "/login", "/api/v1/user/login", "/api/v1/user/signup", "/api/v1/user/logout", "/css/**",
            "/js/**", "/fonts/**", "/images/**", "/swagger-ui/**", "/v2/api-docs/**", "/proxy/**", "/src/**"};

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // 未認証でアクセス可能なパスの設定
        http.authorizeRequests()
                .antMatchers(ACCESSIBLE_PATH)
                .permitAll()
                .anyRequest()
                .authenticated();

        // 未認証状態でのAPIアクセスには401を返す -> フロント側でログインページへリダイレクト
        http.exceptionHandling()
                .defaultAuthenticationEntryPointFor(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED), new AntPathRequestMatcher("/api/**"));

        // ログインの設定
        http.formLogin()
                // "/api/v1/user/login"でPOSTを受付
                .loginProcessingUrl("/api/v1/user/login").permitAll()
                .usernameParameter("name")
                .passwordParameter("password")
                // ログイン成功時：200 -> フロント側でTOPページへリダイレクト
                .successHandler(authenticationSuccessHandler())
                // ログイン失敗時：401 -> フォームの警告を表示
                .failureHandler(authenticationFailureHandler());

        // ログアウトの設定
        http.logout()
                .logoutUrl("/api/v1/user/logout").permitAll()
                .deleteCookies("JSESSIONID");

        // ローカル環境のみ
        if (profile.equals("local")) {
            // CORS設定を適応
            http.cors().configurationSource(this.corsConfigurationSource());
        }
        if (!isEnabledCsrf) {
            // CSRFを無効化
            http.csrf().disable();
        }
        return http.build();
    }

    // ログイン成功時のハンドラ
    AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AntsAuthenticationSuccessHandler();
    }
    // ログイン失敗時のハンドラ
    AuthenticationFailureHandler authenticationFailureHandler() {
        return new AntsAuthenticationFailureHandler();
    }

    @Bean // パスワードのエンコーダーの設定
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Profile("local")
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedMethod(HttpMethod.GET);
        config.addAllowedMethod(HttpMethod.POST);
        config.addAllowedMethod(HttpMethod.PUT);
        config.addAllowedMethod(HttpMethod.DELETE);
        config.addAllowedOrigin("http://localhost:3000/");
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource corsSource = new UrlBasedCorsConfigurationSource();
        corsSource.registerCorsConfiguration("/**", config);

        return corsSource;
    }
}

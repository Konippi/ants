package com.example.ants.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // メッセージブローカーのインメモリのエンドポイントの設定 (/chat/** に格納)
        registry.enableSimpleBroker("/chat");
        // クライアントからの送信エンドポイントの設定 (/app/** で受付)
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 初回WebSocket通信開始時のエンドポイントの設定
        registry.addEndpoint("/websocket").setAllowedOrigins("http://localhost:3000");
    }
}

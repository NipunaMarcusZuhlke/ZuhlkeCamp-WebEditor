package launcher;

import langserver.HelloLanguageServer;
import org.eclipse.lsp4j.jsonrpc.Launcher;
import org.eclipse.lsp4j.services.LanguageClient;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

public class LanguageServerWebSocketHandler extends TextWebSocketHandler {
    private HelloLanguageServer languageServer;
    private WebSocketMessageHandler messageHandler;

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
       // TODO: Implement this.
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        // TODO: Implement this.
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) {
        // TODO: Implement this.
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        // TODO: Implement this.
    }
}

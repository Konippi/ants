import { IMessage, Stomp } from "@stomp/stompjs";
import { Chat } from "../restAPI";


const basePath = "ws://localhost:8080";
export const stompClient = Stomp.over(() => new WebSocket(basePath + "/websocket"));


/**
 * WebSocketを接続して、WebSocketからの受信処理の設定を行う
 * 
 * @param projectIdList プロジェクトIDのリスト（プロジェクトIDで疎通パスの設定） 
 * @param setReceivedMessage 受け取ったメッセージをReduxへ格納するコールバック関数
 */
export const connectWebSocketByProjectIdList = (projectIdList: Array<number>, setReceivedMessage: (chatMessage: Chat) => void) => {
    // WebSocket接続
    const connectWebSocket = () => {
        stompClient.connect({}, subscribe);
    };
    // プロジェクトIDを含むパスで疎通
    const subscribe = () => {
        projectIdList.map(projectId => stompClient.subscribe(`/chat/message/${projectId}`, onMessageReceived));
    };
    // メッセージを受信した時の処理
    const onMessageReceived = (payload: IMessage) => {
        const receivedMessage = JSON.parse(payload.body) as Chat;
        setReceivedMessage(receivedMessage);
    };

    connectWebSocket();
};


export interface WebSocketChatMessageRequestBody {
    projectId?: number;
    userId?: number;
    message?: string;
}
// WebSocketでメッセージを送信する
export const sendMessageWithWebSocket=(chatMessage: WebSocketChatMessageRequestBody)=>{
    stompClient.send(`/app/message/${chatMessage.projectId}`, {}, JSON.stringify(chatMessage));
};
import { Dispatch } from "redux";
import { Chat } from "../../../client/restAPI";
import { chatApi } from "../../../client/restAPI/clientWrapper";
import { StoreType } from "../../store";
import { setChatDataAction } from "./actions";

// ログインユーザーが所属するプロジェクトのチャットメッセージを取得する（REST API）
export const fetchChatMessagesByProjectIdList = (projectIdList: Array<number>) => {
    return async(dispatch: Dispatch) => {
        const response = await chatApi.getChatMessagesByProjectIdListUsingGET(projectIdList.toString());
        dispatch(setChatDataAction(response.data));
    };
};

// WebSocketから受信したデータを格納
export const setChatMessageFromWebSocket = (chatMessage: Chat) => {
    return (dispatch: Dispatch, getState: () => StoreType) => {
        // chatMessagesへWebSocketからのデータをpush
        const chatMessages = getState().chatData.chatMessages;
        chatMessages?.push(chatMessage);
        dispatch(setChatDataAction({chatMessages: [...chatMessages as Array<Chat>]}));
    };
};
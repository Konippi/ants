import { ChatMessagesResponse } from "../../../client/restAPI";

export interface ActionType {
    type: string;
    payload: ChatMessagesResponse;
}

export const SET_CHAT_DATA = "SET_CHAT_DATA";
export const setChatDataAction = (messages: ChatMessagesResponse) => {
    return {
        type: SET_CHAT_DATA,
        payload: messages
    };
};
import { ChatMessagesResponse } from "../../../client/restAPI";
import * as Actions from "./actions";

export const initialState: ChatMessagesResponse = {
    chatMessages: []
};

export const ChatDataReducer = (state: ChatMessagesResponse = initialState, action: Actions.ActionType) => {
    switch(action.type) {
    case Actions.SET_CHAT_DATA:
        return {
            ...action.payload
        };
    default:
        return state;
    }
};
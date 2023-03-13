import { createSelector } from "reselect";
import { StoreType } from "../../store";

const chatDataSelector = (state: StoreType) => state.chatData;

export const getChatData = createSelector (
    [chatDataSelector],
    state => state
);